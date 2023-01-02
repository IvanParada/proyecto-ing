import { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Container, Stack, Heading, HStack, Text,FormControl } from '@chakra-ui/react'
import InputForm from '../../components/InputForm'
import SelectForm from '../../components/SelectForm'
import TextareaForm from '../../components/TextareaForm'
import { Formik } from 'formik'
import espaciosValidation from '../../validations/espaciosValidation'
import { createEspacioComun } from '../../data/espacios'

const CrearEspacios = () => {

  const [espacio, setEspacio] = useState({
    nombre: '',
    aforo: '',
    disponibilidad: '',
    descripcion: '',
    estado: ''
  })

  const router = useRouter()

  return (
    <Container w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
      <Box bg='#DAEDEC' padding='100' margin='10' boxShadow='dark-lg' rounded='lg' color='black' maxW='mx'>
        <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}> Crear espacios comunes</Heading>
          <Formik
              initialValues={espacio}
              validationSchema={espaciosValidation}
              onSubmit={(values) => {
                createEspacioComun(values).then(res => {
                  router.push("../espacioComun/espacios")
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
                <InputForm label="Ingrese nombre del espacio" handleChange={handleChange} variant="flushed" name="nombre" placeholder="p. ej.: Quincho, Sala de reuniones, etc." type="text" value={values.nombre}  handleBlur={handleBlur} />
                {touched.nombre && errors.nombre && (
                  <Text color={"red"}>{errors.nombre}</Text>
                )}
                </FormControl>
                <FormControl>
                <InputForm  variant="flushed" name="aforo" isRequired label="Seleccione aforo" handleChange={handleChange} placeholder="Un aforo mínimo de 5 y máximo de 30 personas." type="number"  value={values.aforo} handleBlur={handleBlur} />
                {touched.aforo && errors.aforo && (
                  <Text color={"red"}>{errors.aforo}</Text>
                )}
                </FormControl>
               <FormControl>
               <SelectForm isRequired label="Seleccione disponibilidad" variant="flushed" name="disponibilidad" handleChange={handleChange}  value={values.disponibilidad}  handleBlur={handleBlur}/>
               </FormControl>
               <FormControl>
               <TextareaForm label="Ingrese descripción del espacio" variant="flushed" name="descripcion" handleChange={handleChange} placeholder="Características generales del espacio." type="text"  value={values.descripcion}  handleBlur={handleBlur} />
                {touched.descripcion && errors.descripcion && (
                  <Text color={"red"}>{errors.descripcion}</Text>
                )}
               </FormControl>
               <FormControl>
               <InputForm label="Ingrese estado del espacio" variant="flushed" handleChange={handleChange} name="estado" type="text" placeholder="p. ej.: Buen estado, falta limpieza, estado deplorable, etc." value={values.estado}  handleBlur={handleBlur} />
                {touched.estado && errors.estado && (
                  <Text color={"red"}>{errors.estado}</Text>
                )}
               </FormControl>
              </Stack>
              <HStack>
                <Button bgGradient='linear(to-l, #1A1A8F, #0000FF)' _hover={{ bgGradient: 'linear(to-r, blue.500, blue.300)' }} color='white' type={"submit"} my={6}>Crear</Button>
                <Button bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{ bgGradient: 'linear(to-r, red.500, red.300)' }} color='white' onClick={() => router.push(`/espacioComun/espacios`)}>Cancelar</Button>
              </HStack>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  )
}

export default CrearEspacios


