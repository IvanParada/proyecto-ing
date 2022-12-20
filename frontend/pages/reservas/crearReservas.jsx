import React from 'react'
import { Container, Heading, Input, Button, Stack, Flex, Box, Spacer, Select, product } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'




const crearReservas = () => {
  return (
    <Container maxW="container.xl" >
    <Stack  my={48}>
    <Heading as={"h1"} size={"2xl"} textAlign={"center"}> Crear reserva</Heading>
    </Stack>
    </Container>

  )
    



  {/*const reserva = () => {
    return ( 
        
        
        
    }
    
    const menuop = () => {
        return (
            <Container maxW="container.md">
    <Heading as={"h2"} textAlign={"left"}>
    <Select placeholder='Select option'>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select> 
    </Heading>
  </Container>
 )
  }


  <Container maxW="container.xl" mt={10}>
          <Heading as={"h1"} size={"2xl"} textAlign={"center"}> Crear reserva</Heading>
          <Stack spacing={4} mt={10}>

          </Stack>
          </Container>


  function ToastExample() {
      const toast = useToast()
      return (
          <Button
          onClick={() =>
              toast({
                  title: 'Account created.',
                  description: "We've created your account for you.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
              })
          }
          >
          Show Toast
        </Button>
      )
  }

  function ToastStatusExample() {
      const toast = useToast()
      const statuses = ['success', 'error', 'warning', 'info']
      
      return (
          <Wrap>
          {statuses.map((status, i) => (
              <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                      title: `${status} toast`,
                      status: status,
                      isClosable: true,
                  })
              }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      )
    } */}
  
}

export default crearReservas
