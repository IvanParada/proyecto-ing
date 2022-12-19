import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from 'axios'
import {getUsers} from '../../../data/user'
import { Container,Heading,Table,Tr,Td,Tbody, HStack, Button } from "@chakra-ui/react"

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
        <Container maxW="container.md">
            <Heading textAlign={"center"} my={10}>Detalles Usuario</Heading>
            <Table variant="striped" colorScheme='purple'>
                <Tbody>
                <Tr>
                    <Td>ID</Td>
                    <Td>{user._id}</Td>
                </Tr>
                <Tr>
                    <Td>Nombres</Td>
                    <Td>{user.nombres}</Td>
                </Tr>
                <Tr>
                    <Td>Apellidos</Td>
                    <Td>{user.apellidos}</Td>
                </Tr>
                <Tr>
                    <Td>RUT</Td>
                    <Td> {user.rut}</Td>
                </Tr>
                <Tr>
                    <Td>Estado</Td>
                    <Td>{user.estado}</Td>
                </Tr>
                <Tr>
                    <Td>Rol</Td>
                    <Td>{user.tipoUsuario}</Td>
                </Tr>
                <Tr>
                    <Td>versionKey</Td>
                    <Td>{user.__v}</Td>
                </Tr>
                </Tbody>
            </Table>
            
      <HStack  py={10}>
        <Button w={"full"} colorScheme={"green"} onClick={() => router.push(`/usuario/editar/${user._id}`)}>Editar</Button>
        <Button w={"full"} colorScheme={"purple"} onClick={() => router.push(`/usuario/ver/${user._id}`)}>Volver</Button>
      </HStack>

        </Container>
)

}

export default Usuario