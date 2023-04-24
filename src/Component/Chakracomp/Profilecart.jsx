import {
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import profile from '../../images/mypic.png'
import {ViewIcon } from '@chakra-ui/icons';
// import resume from '../../images/Shoaib-Mansuri-Resume.pdf'
export default function Profile() {
  return (
    <Center py={6}>
      <Box
        w={'320px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}>

        <Flex justify={'center'} mt={-12}>
          <Image
            size={'m'}
            alt={'Author'}
            css={{
              border: '4px dotted teal',
            }}
            
            src={profile}
            w={{ base: '100px', md: '140px', lg: '170px' }}
            className="home-img"
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

          <Link
            id="resume-link-2"
            target="_blank"
            rel="noopener">
            <Button
              id="resume-button-2"
              onClick={()=>window.open(
                "https://drive.google.com/file/d/1JoDW9yn8t8igRx9Jj9z5QeWwhpp0CMDW/view?usp=share_link"
                ,"_blank"
                )}
              fontSize={["sm", "md", "lg"]}
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
          </Link>
        </Box>
      </Box>
    </Center>
  );
}