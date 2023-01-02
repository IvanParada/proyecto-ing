import {Button,ButtonGroup,Container,Box,Heading,Divider,Text,VStack} from '@chakra-ui/react'
import { useRouter } from "next/router"

  import {Flex, Spacer } from '@chakra-ui/react'

export default function Home() {

    const router = useRouter()

  return (
    <VStack>
        <Container w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' pt='100px' maxW="100%" centerContent>
        <Box bg='#DAEDEC' w='100%' h='100%' boxShadow='dark-lg' pt='40px' pb='200px'  pl='100px' pr='200px' margin='10px'  rounded='lg' color='black' >
           <Heading>Bienvenido!</Heading>
           <Divider color={'black'}/>
<Flex minWidth='max-content' alignItems='center' gap='3' pb='30px'>
  <Box p='2'>
        </Box>
        <Spacer />
        <Button  bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
    bgGradient: 'linear(to-r, pink.500, purple.500)',
  }} color='white' onClick={() => router.push('/reservas/crearReservas') }>Reservar</Button>
        </Flex>
            <Text  as='kbd' fontSize='3xl' >Este es el sitio web de <br/><b>Reserva de Espacios Comunes</b>,<br/> aquí podrás realizar tus <br/>reservas para compartir y <br/>disfrutar con tus seres queridos!</Text>
        </Box>
        </Container>
        <Container w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)'  pt='200px' maxW="100%" >
            <Flex minWidth='max-content'  gap='2'>
                <Spacer />
                <ButtonGroup gap='2'>
                <Button  bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
    bgGradient: 'linear(to-r, pink.500, purple.500)',
  }} color='white' onClick={() => router.push('/menuAdministrador') }>Administrador</Button>
                </ButtonGroup>
            </Flex>
        </Container>
    </VStack>
  )
  }
