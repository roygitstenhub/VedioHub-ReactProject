
import {Button, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineCloudUpload} from 'react-icons/ai'



const Upload = () => {
  return (
    
    <VStack w="100%" h={'100vh'} >

       <VStack w={['100%','550px']}  m={'auto'} p='12px'color='purple.600'>

       <AiOutlineCloudUpload size={'200px'} />

        {/* <form action="/" border='1px solid red'> */}
        <HStack  w={'100%'}>
          <Input  size={'md'} type={'file'} textAlign='center' css={{'&::file-selector-button':{
  border:'none',
  height:'100%',
  color:'purple',
  marginLeft:'-15px'
}}}></Input>
          <Button colorScheme={'purple'} py='0'><Link to={'/'}>Upload</Link></Button>
        </HStack>
        {/* </form> */}
       </VStack>

    </VStack>  
 
  )
}

export default Upload