import { NumberInput, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'
import {
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

const NumberInputForm = ({ handleChange, step, defaultValue, min, max, label, name, value, variant }) => {
  return (
    <FormControl id={name} isRequired>
      <FormLabel>{label}</FormLabel>
      <NumberInput step={step} defaultValue={defaultValue} min={min} max={max} handleChange={handleChange} value={value} variant={variant}>
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