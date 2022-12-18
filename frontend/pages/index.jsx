import { useState } from "react"
import {  } from '@chakra-ui/react'
import InputTest from "../components/InputTest"


export default function Home() {

  const [value, setValue] = useState()
  console.log(process.env.SERVIDOR)

  const handleInput = (e) => {
    setValue(e.target.value)
  }

}
