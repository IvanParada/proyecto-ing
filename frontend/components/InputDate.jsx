import React from 'react'
import { Input } from '@chakra-ui/react'
import {FormControl, FormLabel } from '@chakra-ui/react'



const InputDate = ({ label, handleChange, variant, name,, type}) => {
    return (
      <FormControl id={name} isRequired>
        <FormLabel>{label}</FormLabel>
        <Input  variant={variant}
              type={type}
              onChange={handleChange}
              name={name} />
      </FormControl>
    )
  }
  
  export default NumberInputForm

