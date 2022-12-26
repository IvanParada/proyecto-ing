import { useState } from "react"
import { Container, Heading, Input, Stack,Box } from '@chakra-ui/react'
import InputTest from "../components/InputTest"
import { useRouter } from "next/router"
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Home() {

  const [rut, setRut] = useState ('')
  const router = useRouter()

  const handleChange = (e) => {
    setRut(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try{
      router.push('/usuarios')
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <Container   maxW="200xl" centerContent>
      <Box  bg='#DAEDEC' boxShadow='dark-lg' padding='100' margin='253.5'  rounded='lg' color='black' maxW='md'>
      <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10} >Ingrese el usuario</Heading>
      <Stack>
      <Input variant='flushed' placeholder="Ingrese rut, sin puntos ni guión" padding={1} onChange={handleChange} name={"rut"}/>
      <Button bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
        bgGradient: 'linear(to-r, pink.500, purple.500)',
      }} color='white' onClick={onSubmit}>Ingresar</Button>
      
      </Stack>
      </Box>
    </Container>
  )

}
