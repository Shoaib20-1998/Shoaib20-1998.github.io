import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import React from 'react'
  import swal from '@sweetalert/with-react'
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

  export default function ContactComp() {



   

    const handleclick =()=>{

      const MoodButton = ({ rating, onClick }) => (
        <button 
          data-rating={rating}
          className="mood-btn" 
          onClick={() => onClick(rating)}
        />
      )
  
      const onPick = value => {
        swal("Thanks for your rating!", `You rated us ${value}/3`, "success")
      }

      swal({
        text: "How was your experience getting help with this issue?",
        buttons: {
          cancel: "Close",
        },
        content: (
          <div>
            <MoodButton 
              rating={1} 
              onClick={onPick}
            />
            <MoodButton 
              rating={2} 
              onClick={onPick}
            />
            <MoodButton 
              rating={3} 
              onClick={onPick}
            />
          </div>
        )
      })
    }
    return (
      <Container bg="#141321" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="teal"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid black' }}
                          leftIcon={<MdPhone color="white" size="20px" />}>
                          +91-8003740674
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="330px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid black' }}
                          leftIcon={<MdEmail color="white" size="20px" />}
                          id="contact-email">
                          shoaibmansuri235@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid black' }}
                          leftIcon={<MdLocationOn color="white" size="20px" />}>
                          Rajasthan, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'black' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'black' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'black' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="teal"
                            color="white"
                            _hover={{}}
                            onClick={
                           handleclick}
                            >
                            Send Message
                            
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }