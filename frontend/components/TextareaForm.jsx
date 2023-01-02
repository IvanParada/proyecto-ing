import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import React from 'react'

const TextareaForm = ({ handleChange, placeholder, label, name, value, type, variant, handleBlur }) => {
    return (
        <FormControl id={name} isRequired>
            <FormLabel>{label}</FormLabel>
            <Textarea placeholder={placeholder} name={name} value={value} onChange={handleChange} type={type} variant={variant}  onBlur={handleBlur} />
        </FormControl>
    )
}

export default TextareaForm