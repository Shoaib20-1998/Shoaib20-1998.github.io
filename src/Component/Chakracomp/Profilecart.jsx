import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import profile from '../../images/mypic.png'
  import cover from '../../images/cover.png'
  import whatsapp from '../../images/whatsapp.png'
import { ViewIcon } from '@chakra-ui/icons';

  export default function Profile() {
    return (
      <Center py={6}>
        <Box
        //   maxW={'700px'}
          w={'320px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src="https://media1.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif?cid=ecf05e47i3b44b6th9va4zisl2kdui4dxsc9kemzkjukkop6&rid=giphy.gif&ct=g"
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              className="home-img"
              src={
                profile
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Shoaib Mansuri
              </Heading>
              <Text color={'gray.500'}>A Full Stack Web Developer</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>3</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Individual Projects
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>2</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Group Projects
                </Text>
              </Stack>
            </Stack>
  
          <a target="_blank" rel="noopener" href="https://drive.google.com/file/d/1JoDW9yn8t8igRx9Jj9z5QeWwhpp0CMDW/view?usp=share_link"><Button
              w={'full'}
              mt={8}
              bg={"teal"}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
          
              leftIcon={<ViewIcon />}>
             Resume 
            </Button>
            </a>  
          </Box>
        </Box>
      </Center>
    );
  }