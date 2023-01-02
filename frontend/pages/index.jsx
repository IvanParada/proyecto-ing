import { useState, useEffect } from "react"
import { Prompt,Container,Center, Button, Heading, Input,Box,FormHelperText,FormControl,Text } from '@chakra-ui/react'
import { useRouter } from "next/router"
import {getUsers} from '../data/user'
import axios from 'axios'


const Usuarios = () => {

  const [userModels, setUser] = useState([])
  const router = useRouter()
  const getUsers = async () => {
      const response = await axios.get(`${process.env.API_URL}/userModels`)
      setUser(response.data)
  }

  useEffect(() => {
      getUsers()
  }, [])


  return (
      <Container   w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
      <Box  bg='#DAEDEC' boxShadow='dark-lg' padding='10' margin='40' rounded='lg' color='black' >
          <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}  pt='10px' pb='20px'>Ingresar</Heading>
          <FormControl >
            <Text as='b'>Ingrese rut para acceder:</Text>
          <Input variant='flushed'  placeholder='p. ej.: 209187658' type={"text"}  name={"rut"} />
          <FormHelperText >Sin puntos,ni guión. Si termina en K reemplace por un 0.</FormHelperText>
          </FormControl>
          <Center>
          <Button margin='5' bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
    bgGradient: 'linear(to-r, pink.500, purple.500)',
  }} color='white' onClick={() => router.push('/menuAdministrador') }>Acceder</Button>
          </Center>
    </Box>
      </Container>
)

}

export default Usuarios