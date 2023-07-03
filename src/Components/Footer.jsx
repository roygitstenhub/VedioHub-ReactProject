import { Heading, Stack, HStack, VStack, Button, Input,Text,Box } from '@chakra-ui/react'
import React from 'react';
import { Link } from "react-router-dom"
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <Box>
      <Stack p={'24px'} bgColor={'blackAlpha.900'} direction={['column', 'row']} justifyContent={'space-evenly'}>

        <VStack   width='100%' p='12px'>
          <Heading textTransform={'uppercase'} size={'md'} w='100%' color={'white'}  textAlign={['center','left']}>get connected</Heading>
          <HStack borderBottom={'2px solid white'} py='8px' w='100%'>
            <Input placeholder='Enter Email Here..' outline={'none'} color='white' focusBorderColor='none' textAlign={['center','left']} border={'none'} p='0'/>
            <Button colorScheme={'purple'} p={'0'} borderRightRadius="50%" variant={'gost'}>
              <Link to="/send"><AiOutlineSend size={'25'} /></Link>
            </Button>
          </HStack>
        </VStack>

        <VStack color='white' width='100%' p='12px' borderRight={['none','2px']} borderLeft={['none','2px']} >
         <Heading size={'md'} textTransform={'uppercase'}  >Videos hub</Heading>
         <Text>@All Rights Reserved</Text>
        </VStack>

        <VStack textTransform={'capitalize'} color={'white'} width='100%' p='12px'>
         <Heading size={'md'} textTransform={'uppercase'}  >social media</Heading>
         <Link to={'/'}>Watsapp</Link>
         <Link to={'/'}>facebook</Link>
         <Link to={'/'}>github</Link>
        </VStack>
      </Stack>
      </Box>
    </>

  )
}

export default Footer