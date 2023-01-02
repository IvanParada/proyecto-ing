import { NumberInput, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'
import {
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

const NumberInputForm = ({ handleChange, step, defaultValue, min, max, label, name, value, variant, handleBlur, placeholder }) => {
  return (
    <FormControl id={name} isRequired>
      <FormLabel>{label}</FormLabel>
      <NumberInput step={step} placeholder={placeholder} defaultValue={defaultValue} min={min} max={max} onChange={handleChange} value={value} variant={variant}  onBlur={handleBlur} >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  )
}

export default NumberInputForm