import React from 'react'
import { useEffect, useState } from "react"
import {  Table,  Heading, Container, Box, Tr, Td, Tbody, HStack, Button, Stack} from '@chakra-ui/react'
import { getEspacio } from "../../../data/espacios"
import { useRouter } from "next/router"
import NumberInputForm from '../../../components/NumberInputForm'
import InputForm from '../../../components/InputForm'
import {Formik} from 'formik'


export async function getServerSideProps(context) {
  try {
      const response = await getEspacio(context.query.espacioComun)
      return {
          props: {
              data: response.data
          }
      }
  } catch (err){
      return {
          props: {
              data: null
          }
      }
  }
}

const solicitarReserva = () => {

    const [reserva, createReserva] = useState({

        fecha_reserva: '',
        cant_horas:'',
        cant_personas:''
    })

    const router = useRouter()


const Espacios = ({data}) => {
  const router = useRouter()
  const {espacioComun} = router.query
  const [espacios] = useState(data)

  return (
      <Container   w='100%' h='100%' bgGradient='linear(#441182 0%, #9828e5 57%, #b82dfd 100%)' maxW="100%" centerContent>
      <Box  bg='#DAEDEC' boxShadow='dark-lg' padding='10' margin='10' rounded='lg' color='black' >
          <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}>Reservar espacio</Heading>
          <Table variant="striped" colorScheme='purple'>
              <Tbody>
              <Tr>
                  <Td><b>Espacio</b></Td>
                  <Td>{espacios.nombre}</Td>
              </Tr>
              </Tbody>
          </Table>

          <Stack>

            <InputForm
            label="Ingresar fecha y hora"
            handleChange={handleChange}
            variant="flushed"
            name="nombres" 
            type="datetime-local" />
          <NumberInputForm
            step={1}
            defaultValue={1}
            min={1}
            max={6}
            variant="flushed"
            isRequired
            label="Seleccione cantidad de horas"
            handleChange={handleChange}
            type="text" />
          <NumberInputForm
            step={1}
            defaultValue={1}
            min={1}
            max={30}
            variant="flushed"
            isRequired
            label="Seleccione cantidad de personas"
            handleChange={handleChange}
            type="text" />
        </Stack>
          
    <HStack  py={10}>
    <Button bgGradient='linear(to-l, #1A1A8F, #0000FF)'_hover={{ bgGradient: 'linear(to-r, blue.500, blue.300)'}} color='white' type={"submit"} my={6} > Registrar </Button>
    <Button bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{bgGradient: 'linear(to-r, red.500, red.300)'}} color='white' onClick={() => router.push(`../solicitar`)}>Cancelar</Button>
    </HStack>
    </Box>
      </Container>
)

}

}
export default solicitarReserva