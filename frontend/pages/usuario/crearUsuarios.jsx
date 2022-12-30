import {useState} from 'react'
import {Box, Button, Container, Stack, Heading,HStack,Text } from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import InputForm from '../../components/InputForm'
import SelectFormEstado from '../../components/SelectFormEstado'
import SelectFormTipoUsuario from '../../components/SelectFormTipoUsuario'
import {Formik} from 'formik'
import userValidation from '../../validations/userValidation'


const CrearUsuarios = () => {

    const [user, createUser] = useState({

        nombres: '',
        apellidos: '',
        rut:'',
        estado:'',
        tipoUsuario:''
    })
    const router = useRouter()

    return(
        <Container   w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
        <Box bg='#DAEDEC' padding='100' margin='10' boxShadow='dark-lg'   rounded='lg' color='black' maxW='md'>
            <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}> Registrar Usuarios</Heading>
        <Formik
            initialValues={user}
            validationSchema={userValidation}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
            <form onSubmit={handleSubmit} id="form">
        <Stack>
            <InputForm label="Nombres" handleChange={handleChange} variant="flushed" name="nombres" placeholder="p. ej.: Ignacio Ignacio" type="text" value={values.nombres} handleBlur={handleBlur}/>
            { touched.nombres && errors.nombres && (
                <Text color={'red'}>{errors.nombres}</Text>
            )}
            <InputForm label="Apellidos" handleChange={handleChange} variant="flushed" name="apellidos" placeholder="p. ej.: Perez Perez" type="text" value={values.apellidos} handleBlur={handleBlur}/>
            { touched.apellidos && errors.apellidos && (
                <Text color={'red'}>{errors.apellidos}</Text>
            )}
            <InputForm label="RUT" handleChange={handleChange} variant="flushed" name="rut" placeholder="Ingrese RUT, sin puntos ni guión" type="text" value={values.rut} handleBlur={handleBlur}/>
            { touched.rut && errors.rut && (
                <Text color={'red'}>{errors.rut}</Text>
            )}
            <SelectFormEstado label="Estado" handleChange={handleChange} variant="flushed" name="estado" placeholder="Seleccione..." value={values.estado} handleBlur={handleBlur}/>
            <SelectFormTipoUsuario label="Rol Usuario" handleChange={handleChange} variant="flushed" name="tipoUsuario" placeholder="Seleccione..." value={values.tipoUsuario}  handleBlur={handleBlur}/>
        </Stack>
        <HStack>
            <Button bgGradient='linear(to-l, #1A1A8F, #0000FF)'_hover={{ bgGradient: 'linear(to-r, blue.500, blue.300)'}} color='white' type={"submit"} my={6} > Registrar </Button>
            <Button bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{bgGradient: 'linear(to-r, red.500, red.300)'}} color='white' onClick={() => router.push(`/`)}>Cancelar</Button>
        </HStack>
            </form>
            )}
        </Formik>
        </Box>
        </Container>
    )
}

export default CrearUsuarios




