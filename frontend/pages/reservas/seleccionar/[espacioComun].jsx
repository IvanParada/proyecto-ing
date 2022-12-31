import React from 'react'
import { useEffect, useState } from "react"
import {  Table,  Heading, Container, Box, Tr, Td, Tbody, HStack, Button } from '@chakra-ui/react'
import { getEspacio } from "../../../data/espacios"
import { useRouter } from "next/router"

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

const Espacios = ({data}) => {
  const router = useRouter()
  const {espacioComun} = router.query
  const [espacios] = useState(data)

  return (
      <Container   w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
      <Box  bg='#DAEDEC' boxShadow='dark-lg' padding='10' margin='10' rounded='lg' color='black' >
          <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}>Detalles Usuario</Heading>
          <Table variant="striped" colorScheme='purple'>
              <Tbody>
              <Tr>
                  <Td><b>ID</b></Td>
                  <Td>{espacios._id}</Td>
              </Tr>
              <Tr>
                  <Td><b>Nombres</b></Td>
                  <Td>{espacios.nombre}</Td>
              </Tr>
              </Tbody>
          </Table>
          
    <HStack  py={10}>
      <Button w={"full"} bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
  bgGradient: 'linear(to-r, pink.500, purple.300)',
}} color='white' onClick={() => router.push(`../solicitar`)}>Volver</Button>
    </HStack>
    </Box>
      </Container>
)

}


export default Espacios