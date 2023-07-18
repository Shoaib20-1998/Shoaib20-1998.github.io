import { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
export default function ProjectCart({ title,imgdark, heading, disc, deploye, github, img }) {
    const [liked, setLiked] = useState(false);
    return (
        <Center py={6}>
            <Box
                w={['290px', 'md', 'md', 'md']}
                h='auto'
                rounded={'50px'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                className="project-card" 
                borderColor="black"
                textAlign={"left"}
                boxShadow={useColorModeValue('8px 18px 0 rgb(26,32,44)', '8px 18px black')}>
                <Box  p="2" h='auto'>
                    <Img
                        src={
                          useColorModeValue(img,imgdark)
                        }
                         borderRadius="20px"
                        roundedTop={'sm'}
                        objectFit="cover"
                        h={['200px', '250px', '250px', '250px']}
                        w={['sm', 'md', 'md', 'md']}
                        alt={'be stylish'}
                        boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"                     
                    />
                </Box>
                <Box p={4}>
                {title.map((item)=>
                    <Box
                        bg="teal"
                        display={'inline-block'}
                        marginLeft={"2"}
                        borderRadius={['sm', 'md', 'md', 'md']}
                        key={item}
                        px={2}
                        py={1}
                        color="white"
                        mb={2}>                    
                            <Text className="project-tech-stack"  padding={"0.5"}color="white" fontSize={'xs'} fontWeight="medium">
                            {item}
                           </Text>            
                    </Box>
                  )}  
                    <Heading className="project-title"  marginLeft={"2"}  fontSize={['sm', 'md', 'md', 'md']} noOfLines={1}>
                        {heading}
                    </Heading>
                    <Text className="project-description"  fontSize={['11px', '17px', '20px', '20px']} marginLeft={"2"} marginTop={"2"}  noOfLines={3}>
                        {disc}
                    </Text>
                </Box>
                
                <HStack borderTop={'1px'} color="black"  bg="teal">
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                       
                        cursor={'pointer'}
                        color={"white"}
                        w="full">
                        <a className="project-github-link" href={github} target='_blank'>
                            <Text fontSize={['13px', '16px', '20px', '20px']} borderRadius="5px" padding={"5px 10px"} border={"3px dotted rgb(26,32,44) "}  marginLeft={"2"}  fontWeight={'semibold'}>
                                Github
                            </Text>
                        </a>
                        <a className="project-deployed-link" href={deploye} target='_blank' style={{display:"flex",backgroundColor:"rgb(26,32,44)",borderRadius:"5px"}}>
                           <Box fontSize={['13px', '16px', '20px', '20px']} style={{marginRight:"5px" , padding:"7px 11px"}}>Live</Box>
                        <BsArrowUpRight />
                        </a>
                        
                    </Flex>
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        borderLeft={'1px'}
                        cursor="pointer"
                        onClick={() => setLiked(!liked)}>
                        {liked ? (
                            <BsHeartFill fill="red" fontSize={['13px', '16px', '20px', '20px']} />
                        ) : (
                            <BsHeart fontSize={['13px', '16px', '20px', '20px']}/>
                        )}
                    </Flex>
                </HStack>
            </Box>
        </Center>
    );
}