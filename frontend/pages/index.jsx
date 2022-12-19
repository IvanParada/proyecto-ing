import { useState } from "react"
import { Container, Heading, Input, Button, Stack } from '@chakra-ui/react'
import InputTest from "../components/InputTest"
import { useRouter } from "next/router"

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
    <Container maxW="container.xl" centerContent>
      <Heading textAlign={"center"} my={10}>Ingrese el usuario</Heading>
      <Stack>
      <Input onChange={handleChange} name={"rut"}/>
      <Button colorScheme="green" onClick={onSubmit}>Ingresar</Button>
      </Stack>
    </Container>
  )

}
