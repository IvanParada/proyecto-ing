import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const InputForm = ({label, handleChange, variant, name, placeholder, type}) => {
  return (
    <FormControl id={name} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input variant={variant}  placeholder={placeholder} type={type} onChange={handleChange} name={name} />
    </FormControl>
  )
}

export default InputForm