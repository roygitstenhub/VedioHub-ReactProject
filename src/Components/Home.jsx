import React from 'react';
import { Box, Center, Container, fadeConfig, Heading, Stack,Text,Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import img5 from "../Assets/5.png"

const headingOption={
    pos:'absolute',
    top:'50%',
    left:'50%',
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:'8px'
    
}
const Home = () => {
  return (
    <>
     <Box w='full' border='1px' h={'100vh'}>
      
     <Carousel
     autoPlay
     infiniteLoop
     interval={1000}
     showStatus={false}
     showThumbs={false} 
     showArrows={false}
  
     >

     <Box w={'full'} h={'100vh'}>
     <Image src={img1}  objectFit={'contain'} />
       <Heading  bgColor={'blackAlpha.600'} color="whiteAlpha.900" w={['80%','fit-content']} {...headingOption}>watch the future</Heading>
      </Box>

      <Box w={'full'} h={'80vh'}>
      <Image src={img2}  objectFit={'contain'} />
       <Heading bgColor={'whiteAlpha.500'} color="blackAlpha.800" w={['80%','fit-content']}{...headingOption}>future is gaming</Heading>
      </Box>

      <Box w={'full'} h={'80vh'}>
      <Image src={img3}  objectFit={'contain'} />
       <Heading  bgColor={'blackAlpha.600'} color="whiteAlpha.900" w={['90%','fit-content']} {...headingOption}> gameing on console</Heading>
      </Box>

      <Box w={'full'} h={'80vh'}>
       <Image src={img4}  objectFit={'contain'} />
       <Heading bgColor={'blackAlpha.600'} color="whiteAlpha.900" w={['80%','fit-content']}{...headingOption}>night life is cool</Heading>
      </Box>
     </Carousel>
     </Box>
     
     <Container maxW={'Container.lg'} H='100vh'  my={'45px'}>
    <Heading py={'10px'} borderBottom="2px" w={'fit-content'} margin={'auto'} mb='20px'>SERVICES</Heading>
     <Stack 
    //  p={'24px'}
     direction={['column','row']}
     alignItems={'center'}
     justifyContent={'center'}
     >
    <img src={img5} alt=""  width={'300px'} srcset="" />
    <Text p={'8px'} textAlign={'justify'} width={['100%','60%' ]}>
    Gaming is usually played individually or with multiple players locally or online on either a dedicated video game console, PC or mobile device. A video game console, such as an Xbox, PlayStation or Switch is commonly connected to a TV, and the player uses a controller to interact with the game. While people can play games on any type of PC, gaming PCs are computers optimized for video game performance using fast processors, a lot of memory and powerful graphics processing units (GPUs). The largest segment of the gaming market today, however, is mobile, where players use their smartphone or tablet to play. These games generally support themselves through in-app microtransactions or ads.
    </Text>
    </Stack>
   
    
     </Container>
     
    
    

    </>
  )
}

export default Home