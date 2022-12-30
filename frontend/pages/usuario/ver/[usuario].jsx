import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {getUsers} from '../../../data/user'
import { Container,Heading,Table,Tr,Td,Tbody, HStack, Button,Box } from "@chakra-ui/react"

export async function getServerSideProps(context) {
    try {
        const response = await getUsers(context.query.usuario)
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

const Usuario = ({data}) => {
    const router = useRouter()
    const {usuario} = router.query
    const [user] = useState(data)

    return (
        <Container   w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
        <Box  bg='#DAEDEC' boxShadow='dark-lg' padding='10' margin='10' rounded='lg' color='black' >
            <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}>Detalles Usuario</Heading>
            <Table variant="striped" colorScheme='purple'>
                <Tbody>
                <Tr>
                    <Td><b>ID</b></Td>
                    <Td>{user._id}</Td>
                </Tr>
                <Tr>
                    <Td><b>Nombres</b></Td>
                    <Td>{user.nombres}</Td>
                </Tr>
                <Tr>
                    <Td><b>Apellidos</b></Td>
                    <Td>{user.apellidos}</Td>
                </Tr>
                <Tr>
                    <Td><b>RUT</b></Td>
                    <Td> {user.rut}</Td>
                </Tr>
                <Tr>
                    <Td><b>Estado</b></Td>
                    <Td>{user.estado}</Td>
                </Tr>
                <Tr>
                    <Td><b>Rol</b></Td>
                    <Td>{user.tipoUsuario}</Td>
                </Tr>
                <Tr>
                    <Td><b>versionKey</b></Td>
                    <Td>{user.__v}</Td>
                </Tr>
                </Tbody>
            </Table>
            
      <HStack  py={10}>
        <Button w={"full"} bgGradient='linear(to-l, #1D901A, #15ED0F)' _hover={{
    bgGradient: 'linear(to-r, green.500, green.300)',
  }} color='white' onClick={() => router.push(`/usuario/editar/${user._id}`)}>Editar</Button>
        <Button w={"full"}  bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{
    bgGradient: 'linear(to-r, red.500, red.300)',
  }} color='white' onClick={() => router.push(`/usuario/eliminar/${user._id}`)}>Eliminar</Button>
        <Button w={"full"} bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
    bgGradient: 'linear(to-r, pink.500, purple.300)',
  }} color='white' onClick={() => router.push(`/usuarios`)}>Volver</Button>
      </HStack>
      </Box>
        </Container>
)

}

export default Usuario