import { ReactNode } from 'react';
import mypic from '../images/mypic.png'
import resume from '../images/Shoaib-Mansuri-Resume.pdf'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, DownloadIcon, MoonIcon, SettingsIcon } from '@chakra-ui/icons';
import Home from './Home';
import styled from '@emotion/styled';
import styles from './Css/Navbar.module.css'
import{Link as Newlink} from 'react-scroll'
const Links = ['Home', 'About', 'Skills','Projects','Contact Me'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar({toggle,settoggle}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.navbar}>
      <Box style={{backgroundColor:toggle?"black":"white"}} id="nav-menu" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            colorScheme={'teal'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Shoaib Mansuri</Box>
            <HStack
              
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>           
                <Newlink className='nav-link home' to="home" spy={true} smooth={true} offset={-100} duration={500}>                  
                  {Links[0]}                
                  </Newlink>             
            </HStack>
            <HStack
             
             as={'nav'}
             spacing={4}
             display={{ base: 'none', md: 'flex' }}>           
                <Newlink className="nav-link about" to="about" spy={true} smooth={true} offset={-100} duration={500}>{Links[1]}</Newlink>             
            </HStack>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>           
                <Newlink className="nav-link skills" to="skills" spy={true} smooth={true} offset={-100} duration={500} >{Links[2]}</Newlink>             
            </HStack>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>           
                <Newlink className='nav-link projects' to="projects" spy={true} smooth={true} offset={-100} duration={500}>{Links[3]}</Newlink>             
            </HStack>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>           
                <Newlink className='nav-link contact' to="contact" spy={true} smooth={true} offset={-100} duration={500} >{Links[4]}</Newlink>             
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <button onClick={()=>settoggle(!toggle)}>{toggle?<SettingsIcon/>:<MoonIcon />}</button>
          
          <a class="nav-link resume" href={resume} download="Shoaib-Mansuri-Resume.pdf" >
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<DownloadIcon />}>
            Resume  
            </Button>
            </a> 
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    mypic
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </div>
  );
}

