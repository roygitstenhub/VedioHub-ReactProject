import React from 'react'
import {  Heading, VStack,Input, Container,Text, Button, Avatar } from '@chakra-ui/react'


const Signup = () => {
  return (
    <Container maxW={'container.xl'}  height={'100vh'}  p='16px'>
    <form action="" >
        <VStack
        width={['100%','400px']}
        p={'16px'}
        m={'auto'}
        alignItems={['stretch']}
        spacing={'4'}
        boxShadow={'10px 10px 54px grey'}
        marginTop='30px'
        >
        <Heading size={'lg'} textAlign={['center',"center"]} textTransform={'uppercase'} fontWeight={'400'}>Videos Hub</Heading>
        <Avatar size={'xl'} alignSelf={'center'}/>

        <Input placeholder='Enter Your Name' required></Input>
         <Input placeholder='Enter Your Email' required></Input>
         <Input placeholder='Enter Your Password' required ></Input>
         <Text textAlign={'right'} color={'purple'}><a href="">forgot Password?</a></Text>
         <Button colorScheme={'purple'} w={'100%'}>Sign Up</Button>

         <Text textAlign={'right'} color={'purple'}>
            <a href="">Already Signed Up?</a>
            <a href="/Login">Login?</a>
        </Text>
         
        </VStack>
    </form>

  </Container>
  )
}

export default Signup