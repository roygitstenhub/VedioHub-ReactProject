import { Heading, Stack, VStack,Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'





const Videos = () => {

  let videosArr=[
'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',];
 
  const [videos,setVideos]=useState(videosArr[0]);


  return (


    
    <>
    <Stack h={'100vh'} direction={['column','row']} padding={'8px'}>

       <VStack width={['100%','70%']}  alignItems={'flex-start'}>
        <video 
        src={videos}
        controls
        width={'100%'} 
        >
        </video>
        <VStack textAlign={'justify'} alignItems={'flex-start'} w={'full'} px={'4px'} overflowX={'auto'} >
            <Heading size={'md'} textTransform='uppercase' fontWeight={'400'}>sample videos</Heading>
            <Text textTransform={'capitalize'}>
                new videos will be updated soon.
            </Text>
        </VStack>
        </VStack> 

      <VStack width={['100%','25%']} alignItems={'stretch'} spacing={'6'} p={'4px'} overflowY={['auto','auto']}  >

     


     {
       videosArr.map((itemSrc,index)=>(
       
        <Button border={'none'} onClick={()=>{setVideos(itemSrc)}} variant={'ghost'} textTransform={'uppercase'} fontWeight={'400'}>video {index+1}</Button>

       ))
       }
      
     
      </VStack>
    </Stack>

   


</>

  )
}

export default Videos