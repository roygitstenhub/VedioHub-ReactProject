import React from 'react'
import {  Heading, VStack,Input, Container,Text, Button } from '@chakra-ui/react'
import { useRef } from 'react'

const Login = props => {
  const inputElement = useRef();
  function result ()
  {
   alert(inputElement.current.value)
  }
  return (
    <>
    
  <Container maxW={'container.xl'}  height={'100vh'}  p='16px'>
    <form action="" >
        <VStack
        width={['100%','400px']}
        p={'24px'}
        m={'auto'}
        alignItems={['stretch']}
        spacing={'8'}
        my={'80px'}
        boxShadow={'12px 12px 54px grey'}
        >
        <Heading size={'lg'} textAlign={['center',"left"]} fontWeight={'400'} >Welcome Back</Heading>
         <Input placeholder='Enter Your Email' ref={inputElement} required></Input>
         <Input placeholder='Enter Your Password'></Input>
         <Text textAlign={'right'} color={'purple'}><a href="">forgot Password?</a></Text>
         <Button colorScheme={'purple'} w={'100%'}  onClick={result} >Log in</Button>

         <Text textAlign={'right'} color={'purple'}>
            <a href="">New user?</a>
            <a href="/Signup">Sign Up?</a>
        </Text>
         
        </VStack>
    </form>

  </Container>
    

  

    
    
    
    
    
    </>
  )
}

Login.propTypes = {}

export default Login
