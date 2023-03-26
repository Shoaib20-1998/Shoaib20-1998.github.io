import { ReactNode, useEffect, useState } from 'react';
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
import { Link as Newlink } from 'react-scroll'
import { color } from 'framer-motion';
const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact Me'];


export default function Navbar({ toggle, settoggle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handletoggle = () => {
    settoggle(!toggle)
  }


  return (
    <div className={styles.navbar}>
      <Box style={{ backgroundColor: toggle ? "black" : "white" }} id="nav-menu" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
            <button onClick={handletoggle}>{toggle ? <SettingsIcon /> : <MoonIcon />}</button>

            <a className="nav-link resume" href={resume} download="Shoaib-Mansuri-Resume.pdf" >
              <Button
                borderRadius={"3xl"} bg={"teal.500"} color={"white"} _hover={{
                  bg: "teal.500"
                }}
                leftIcon={<DownloadIcon />}>
                Resume
              </Button>
            </a>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack spacing={4}>
              <Button bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className='nav-link home' to="home" spy={true} smooth={true} offset={-500} duration={500}>
                  {Links[0]}
                </Newlink>
              </Button>
              <Button bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className="nav-link about" to="about" spy={true} smooth={true} offset={-500} duration={500}>{Links[1]}</Newlink>
              </Button>
              <Button bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className="nav-link skills" to="skills" spy={true} smooth={true} offset={-500} duration={500} >
                  {Links[2]}</Newlink>
              </Button>
              <Button bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className='nav-link projects' to="projects" spy={true} smooth={true} offset={-500} duration={500}>{Links[3]}</Newlink>
              </Button>
              <Button bg={"teal.500"} color={"white"} _hover={{
                bg: "teal.500"
              }}>
                <Newlink style={{ color: "white" }} className='nav-link contact' to="contact" spy={true} smooth={true} offset={-500} duration={500} >{Links[4]}</Newlink>
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </div >
  );
}

