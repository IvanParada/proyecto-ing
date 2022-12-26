import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

const SelectFormEstado = ({label, handleChange, variant, name, placeholder,option}) => {
  return (
    <FormControl id={name} isRequired>
        <FormLabel>{label}</FormLabel>
        <Select variant={variant}  placeholder={placeholder} onChange={handleChange} name={name} >
            <option>Autorizado</option>
            <option>Restringido</option>
        </Select>
    </FormControl>
  )
}

export default SelectFormEstado