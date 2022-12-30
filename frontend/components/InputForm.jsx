import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const InputForm = ({label, handleChange, variant, name, placeholder, type, handleBlur,value}) => {
  return (
    <FormControl id={name} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input  variant={variant}
              placeholder={placeholder}
              type={type}
              onChange={handleChange}
              name={name}
              handleBlur={handleBlur}
              value={value} />
    </FormControl>
  )
}

export default InputForm