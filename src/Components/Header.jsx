
import { BiMenuAltLeft } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  HStack,
  VStack, 
  useDisclosure

} from '@chakra-ui/react';
import { Link } from "react-router-dom";




const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        pos={'fixed'}
        left={'4'}
        top={'4'}
        w={'10'}
        h={'10'}
        p={'0'}
        colorScheme={'purple'}
        borderRadius={'50%'}
        onClick={onOpen}
        zIndex={10}
      >
        <BiMenuAltLeft />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>

          <DrawerHeader textTransform={'uppercase'} textAlign={'center'}>videos hub</DrawerHeader>

          <DrawerBody>
            <DrawerCloseButton/>

            <VStack alignItems={'stretch'} spacing={'8'} >
              <Button
               colorScheme={'purple'}
               variant={'ghost'}
               textTransform={'uppercase'}
               fontWeight='400'
               onClick={onClose}><Link to={'/'}>Home</Link>
              </Button>

              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                textTransform={'uppercase'}
                onClick={onClose}
                fontWeight='400'
              ><Link to={'/videos'}>videos</Link>
              </Button>

              <Button
                colorScheme={'purple'}
               variant={'ghost'}
                textTransform={'uppercase'}
                onClick={onClose}
                fontWeight='400'
              ><Link to={'/FreeV'}>Free Videos</Link>
              </Button>

              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                textTransform={'uppercase'}
                onClick={onClose}
                fontWeight='400'
              ><Link to={'/upload'}>Upload Videos</Link>
              </Button>

            </VStack>


            <HStack
              w='80%'
              pos="absolute"
              bottom={'10px'}
              justifyContent={'space-evenly'}
            >
              <Button colorScheme={'purple'} onClick={onClose}><Link to={'/login'}>Login</Link></Button>
              <Button colorScheme={'purple'} variant={'outline'} onClick={onClose}><Link to={'/signup'}>SignUp</Link></Button>
            </HStack>
          </DrawerBody>

        </DrawerContent>

      </Drawer>


    </>
  )
}

export default Header