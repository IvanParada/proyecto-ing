import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {getEspacio} from '../../../data/user'
import { Container,Heading,Table,Tr,Td,Tbody, HStack, Button,Box } from "@chakra-ui/react"

export async function getServerSideProps(context) {
    try {
        const response = await getEspacio(context.query.usuario)
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

const espacioComun = ({data}) => {
    const router = useRouter()
    const {Espacio} = router.query
    const [espacio] = useState(data)

    return (
        <Container   w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
        <Box  bg='#DAEDEC' boxShadow='dark-lg' padding='10' margin='10' rounded='lg' color='black' >
            <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}>Detalles Usuario</Heading>
            <Table variant="striped" colorScheme='purple'>
                <Tbody>
                <Tr>
                    <Td><b>ID</b></Td>
                    <Td>{espacio._id}</Td>
                </Tr>
                <Tr>
                    <Td><b>Nombre</b></Td>
                    <Td>{espacio.nombre}</Td>
                </Tr>
                <Tr>
                    <Td><b>Aforo</b></Td>
                    <Td>{espacio.aforo}</Td>
                </Tr>
                <Tr>
                    <Td><b>Disponibilidad</b></Td>
                    <Td> {espacio.disponibilidad}</Td>
                </Tr>
                <Tr>
                    <Td><b>Descripción</b></Td>
                    <Td>{espacio.descripcion}</Td>
                </Tr>
                <Tr>
                    <Td><b>Estado</b></Td>
                    <Td>{espacio.estado}</Td>
                </Tr>
                <Tr>
                    <Td><b>versionKey</b></Td>
                    <Td>{espacio.__v}</Td>
                </Tr>
                </Tbody>
            </Table>
            
      <HStack  py={10}>
        <Button w={"full"} bgGradient='linear(to-l, #1D901A, #15ED0F)' _hover={{
    bgGradient: 'linear(to-r, green.500, green.300)',
  }} color='white' onClick={() => router.push(`/usuario/editar/${espacio._id}`)}>Editar</Button>
        <Button w={"full"}  bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{
    bgGradient: 'linear(to-r, red.500, red.300)',
  }} color='white' onClick={() => router.push(`/usuario/eliminar/${espacio._id}`)}>Eliminar</Button>
        <Button w={"full"} bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
    bgGradient: 'linear(to-r, pink.500, purple.300)',
  }} color='white' onClick={() => router.push(`/espacios`)}>Volver</Button>
      </HStack>
      </Box>
        </Container>
)

}

export default espacioComun