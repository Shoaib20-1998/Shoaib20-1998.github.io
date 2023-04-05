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
          >
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              className="home-img"
              src={
                profile
              }
              alt={'Author'}
              css={{
                border: '4px dotted teal',
              }}
            />
        
          </Flex>
  
          <Box p={6}>      
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
  
          <a target="_blank" rel="noopener" href="https://drive.google.com/file/d/1JoDW9yn8t8igRx9Jj9z5QeWwhpp0CMDW/view?usp=share_link">
            <Button
            fontSize={["sm","md","lg"]}
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