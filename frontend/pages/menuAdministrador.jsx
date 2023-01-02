import {Button,ButtonGroup,Container,Box,Heading,Divider} from '@chakra-ui/react'
import { useRouter } from "next/router"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

  import {Flex, Spacer } from '@chakra-ui/react'

export default function Home() {

    const router = useRouter()

  return (
    <Container w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
        <Box bg='#DAEDEC' w='100%' h='100%' boxShadow='dark-lg' pt='40px' pb='400px'  pl='100px' pr='200px' margin='10px'  rounded='lg' color='black' >
           <Heading>Panel Administrador</Heading>
           <Divider color={'black'}/>
<Flex minWidth='max-content' alignItems='center' gap='3'>
  <Box p='2'>
    <Heading size='md'>Navegador</Heading>
        </Box>
        <Spacer />
            <Menu>
            <MenuButton  color='white' bgGradient='linear(to-l, #7928CA, #FF0080)' as={Button} >
                Usuarios
            </MenuButton>
            <MenuList >
                <MenuItem onClick={() => router.push(`/usuarios`)} _hover={{
    bgGradient: 'linear(to-r, pink.100, purple.100)',
  }}  >Ver usuarios</MenuItem>
                <MenuItem onClick={() => router.push(`/usuario/crearUsuarios`)} _hover={{
    bgGradient: 'linear(to-r, pink.100, purple.100)',
  }} >Registrar usuario</MenuItem>
            </MenuList>
            </Menu>

            <Menu>
            <MenuButton color='white' bgGradient='linear(to-l, #7928CA, #FF0080)' as={Button} >
                Espacios Comunes
            </MenuButton>
            <MenuList>
                <MenuItem _hover={{
    bgGradient: 'linear(to-r, pink.100, purple.100)',
  }}  >Ver espacios comunes</MenuItem>
                <MenuItem _hover={{
    bgGradient: 'linear(to-r, pink.100, purple.100)',
  }} >Crear espacio común</MenuItem>
            </MenuList>
            </Menu>

            <Menu>
            <MenuButton color='white' bgGradient='linear(to-l, #7928CA, #FF0080)' as={Button} >
                Reservas
            </MenuButton>
            <MenuList>
                <MenuItem _hover={{
    bgGradient: 'linear(to-r, pink.100, purple.100)',
  }} >Ver reserva</MenuItem>
            </MenuList>
            </Menu>
        </Flex>
        </Box>
        </Container>


  )
  }
