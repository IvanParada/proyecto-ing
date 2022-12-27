import React from "react";
import {Center, Image,Container } from '@chakra-ui/react'


const errorPage = () => {
    return (
        <Container   w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
        <Center>
                <Image  src='https://asia-exstatic.vivo.com/static/img/error/404-PC_31daffa.png' />
        </Center>
        </Container>

    )
}
export default errorPage

