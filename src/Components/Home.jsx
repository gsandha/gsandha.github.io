import React from 'react'
import { Center, Flex, Text,Button,Link, Avatar ,Image} from '@chakra-ui/react';
import { AiOutlineDownload } from "react-icons/ai";
import Profile from "../Assets/Profile.PNG"
import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <div id="home" className='nav-link home'>
         <Center 
        // bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
        // bgGradient={`linear(to-r, #${"282828"}, #${"7492FF"}, #${"4018B3"})`}
        // 1E1E1E
        backgroundColor={"#1A1828"}
        // p="80px 0"
        pt="120px" pb="60px"
      > 
        <Flex
  
          w={"80%"}
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center" }}
          p={{ base: "10px", md: "30px" }}
          gap="40px"
          justifyContent="space-around"
          color="white"
        >
          <Center>
          <Fade top>   <Image className="home-img" w={"250px"} h={"250px"} src={Profile} borderRadius={"full"}/> </Fade>
          </Center>
          <Center>
            <Text id='user-detail-name' fontSize={"3xl"} fontFamily={"sans-serif"}>
              Hi, I'm Gurpreet Sandha<br />  A Full Stack Web Developer. <br/> <br/>
               <Link className="nav-link resume" 
         as={"a"}
            backgroundColor="#4018B3" w="150px" h="60px"  borderRadius="10px" alignItems="center" textAlign="center"
              display={{ base: "none", md: "flex" }}
              href="https://drive.google.com/uc?export=download&id=1-4LVo1ePnJFOI2c4pMk40caLVZMFqIUg"
              // https://drive.google.com/file/d/1-4LVo1ePnJFOI2c4pMk40caLVZMFqIUg/view?usp=sharing
              // download="https://drive.google.com/uc?export=download&id=1-4LVo1ePnJFOI2c4pMk40caLVZMFqIUg"
              onClick={() => {            
                  window.open("https://drive.google.com/file/d/1-4LVo1ePnJFOI2c4pMk40caLVZMFqIUg/view?usp=sharing");
              }}
            >
              <Button id="resume-button-2"
                // _hover={{ textDecoration: "none", bg: "white", color: "black" }}
                variant="solid"
                leftIcon={<AiOutlineDownload />}
                colorScheme="black"
              >
                Resume
              </Button>
              
            </Link>
            </Text>
           
          </Center>
        </Flex>
        
      </Center>
      
    </div>
  )
}

export default Home