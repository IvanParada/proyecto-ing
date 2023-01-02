import {useState} from 'react'
import {Box, Button, Container, Stack, Heading,HStack,Text,FormHelperText,FormControl} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import InputForm from '../../components/InputForm'
import SelectFormEstado from '../../components/SelectFormEstado'
import SelectFormTipoUsuario from '../../components/SelectFormTipoUsuario'
import {Formik} from 'formik'
import userValidation from '../../validations/userValidation'
import {createUser} from '../../data/user'

const CrearUsuarios = () => {

    const [user, setUser] = useState({
        nombres: '',
        apellidos: '',
        rut:'',
        estado:'',
        tipoUsuario:''
    })
    const router = useRouter()

    return(
        <Container   w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%"  centerContent>
        <Box bg='#DAEDEC' padding='70' margin='10' boxShadow='dark-lg'   rounded='lg' color='black'>
            <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}> Registrar Usuarios</Heading>
        <Formik
            initialValues={user}
            validationSchema={userValidation}
            onSubmit={(values) => {
                createUser(values).then(res => {
                    router.push('../usuarios')
                    console.log(res.status)
                })
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
            <FormControl>
            <InputForm label="Nombres" handleChange={handleChange} variant="flushed" name="nombres" placeholder="p. ej.: Ignacio Ignacio" type="text" value={values.nombres} handleBlur={handleBlur}/>
            { touched.nombres && errors.nombres && (
                <Text color={'red'}>{errors.nombres}</Text>
            )}
            <FormHelperText>Ingrese nombres.</FormHelperText>
            </FormControl>
            <FormControl>
            <InputForm label="Apellidos" handleChange={handleChange} variant="flushed" name="apellidos" placeholder="p. ej.: Perez Perez" type="text" value={values.apellidos} handleBlur={handleBlur}/>
            { touched.apellidos && errors.apellidos && (
                <Text color={'red'}>{errors.apellidos}</Text>
            )}
            <FormHelperText>Ingrese apellidos.</FormHelperText>
            </FormControl>
            <FormControl>
            <InputForm label="RUT" handleChange={handleChange} variant="flushed" name="rut"  placeholder="p. ej.: 232422120" type="text" value={values.rut} handleBlur={handleBlur}/>
            { touched.rut && errors.rut && (
                <Text color={'red'}>{errors.rut}</Text>
            )}
            <FormHelperText>Sin puntos,ni guión. Si termina en K reemplace por un 0.</FormHelperText>
            </FormControl>
            <FormControl>
            <SelectFormEstado label="Estado" handleChange={handleChange} variant="flushed" name="estado" placeholder="Seleccione..." value={values.estado} handleBlur={handleBlur}/>
            <FormHelperText>Ingrese estado del usuario.</FormHelperText>
            </FormControl>
            <FormControl>
            <SelectFormTipoUsuario label="Rol Usuario" handleChange={handleChange} variant="flushed" name="tipoUsuario" placeholder="Seleccione..." value={values.tipoUsuario}  handleBlur={handleBlur}/>
            <FormHelperText>Ingrese el rol del usuario.</FormHelperText>
            </FormControl>
        </Stack>
        <HStack>
            <Button bgGradient='linear(to-l, #1A1A8F, #0000FF)'_hover={{ bgGradient: 'linear(to-r, blue.500, blue.300)'}} color='white' type={"submit"} my={6} > Registrar </Button>
            <Button bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{bgGradient: 'linear(to-r, red.500, red.300)'}} color='white' onClick={() => router.push(`/usuarios`)}>Cancelar</Button>
        </HStack>
            </form>
            )}
        </Formik>
        </Box>
        </Container>
    )
}

export default CrearUsuarios




