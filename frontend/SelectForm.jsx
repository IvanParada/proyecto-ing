import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

const SelectForm = ({ handleChange, placeholder, label, name, value, variant, handleBlur }) => {
    return (
      <FormControl id={name} isRequired>
        <FormLabel>{label}</FormLabel>
        <Select placeholder={placeholder} name={name} value={value} onChange={handleChange} variant={variant} onBlur={handleBlur} > 
            <option value='option1'>Disponible</option>
            <option value='option2'>No disponible</option>
          </Select>
      </FormControl>
    )
  }

  export default SelectForm