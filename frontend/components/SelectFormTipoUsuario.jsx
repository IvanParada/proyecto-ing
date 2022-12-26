import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

const SelectFormTipoUsuario = ({label, handleChange, variant, name, placeholder,option}) => {
  return (
    <FormControl id={name} isRequired>
        <FormLabel>{label}</FormLabel>
        <Select variant={variant}  placeholder={placeholder} onChange={handleChange} name={name} >
            <option>Usuario</option>
            <option>Administrador</option>
        </Select>
    </FormControl>
  )
}

export default SelectFormTipoUsuario