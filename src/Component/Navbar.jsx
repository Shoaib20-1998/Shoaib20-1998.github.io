
import resume from '../images/Shoaib-Mansuri-Resume.pdf'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Link,
  
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, DownloadIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import styles from './Css/Navbar.module.css'
import { Link as Newlink } from 'react-scroll'


const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact Me'];


export default function Navbar({ toggle, settoggle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className={styles.navbar}>
      <Box  id="nav-menu" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            bg={'teal.500'}
            color={"white"}
            _hover={{
              bg: "teal.500"
            }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              cursor={'pointer'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button borderRadius={"3xl"} bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className='nav-link home' to="home" spy={true} smooth={true} offset={-100} duration={500}>
                  {Links[0]}
                </Newlink>
              </Button>
            </HStack>
            <HStack
              cursor={'pointer'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button borderRadius={"3xl"} bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className="nav-link about" to="about" spy={true} smooth={true} offset={-100} duration={500}>{Links[1]}</Newlink>
              </Button>
            </HStack>
            <HStack
              cursor={'pointer'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button
                borderRadius={"3xl"} bg={"teal.500"} color={"white"} _hover={{
                  bg: "teal.500"
                }}>
                <Newlink style={{ color: "white" }} className="nav-link skills" to="skills" spy={true} smooth={true} offset={-100} duration={500} >{Links[2]}</Newlink>
              </Button>
            </HStack>
            <HStack
              cursor={'pointer'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button borderRadius={"3xl"} bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className='nav-link projects' to="projects" spy={true} smooth={true} offset={-100} duration={500}>{Links[3]}</Newlink>
              </Button>
            </HStack>
            <HStack
              cursor={'pointer'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button borderRadius={"3xl"} bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className='nav-link contact' to="contact" spy={true} smooth={true} offset={-100} duration={500} >{Links[4]}</Newlink>
              </Button>

            </HStack>
          </HStack>
          <Flex alignItems={'center'}>


            <Link 
            id="resume-link-1"  
            className="nav-link resume" 
            href={resume} 
            download="Shoaib-Mansuri-Resume.pdf" >
              <Button   
                id="resume-button-1"       
                borderRadius={"3xl"} 
                bg={"teal.500"} 
                color={"white"} 
                _hover={{
                  bg: "teal.500"
                }}
                leftIcon={<DownloadIcon />}>
                Resume
              </Button>
            </Link>
            {/*  */}
            <Button bg={"node"} _hover={{ bg: "none" }} onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={0} display={{ md: 'none' }}>
            <Stack spacing={0}>          
              <Newlink style={{ color: "white", margin: "15px, 15px," }} className='nav-link home' to="home" spy={true} smooth={true} offset={-400} duration={500}>            
                <Button w={"200px"} display={"block"} bg={"teal.500"} color={"white"} _hover={{
                  bg: "teal.500"
                }}>
                  {Links[0]}
                </Button>
              </Newlink>
              <Newlink style={{ color: "white" }} className="nav-link about" to="about" spy={true} smooth={true} offset={-400} duration={500}>
                <Button w={"200px"} display={"block"} bg={"teal.500"} color={"white"} _hover={{
                  bg: "teal.500"
                }}>
                  {Links[1]}
                </Button>
              </Newlink>
              <Newlink style={{ color: "white" }} className="nav-link skills" to="skills" spy={true} smooth={true} offset={-400} duration={500} >
                <Button w={"200px"} display={"block"} bg={"teal.500"} color={"white"} _hover={{
                  bg: "teal.500"
                }}>
                  {Links[2]}
                </Button>
              </Newlink>
              <Newlink style={{ color: "white" }} className='nav-link projects' to="projects" spy={true} smooth={true} offset={-400} duration={500}>
                <Button w={"200px"} display={"block"} bg={"teal.500"} color={"white"} _hover={{
                  bg: "teal.500"
                }}>
                  {Links[3]}
                </Button>
              </Newlink>
              <Newlink style={{ color: "white" }} className='nav-link contact' to="contact" spy={true} smooth={true} offset={-400} duration={500} >
                <Button w={"200px"} display={"block"} bg={"teal.500"} color={"white"} _hover={{
                  bg: "teal.500"
                }}>{Links[4]}
                </Button>
              </Newlink>
            </Stack>
          </Box>
        ) : null}
      </Box>



    </div >
  );
}

