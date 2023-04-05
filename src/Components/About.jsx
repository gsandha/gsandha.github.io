import React from 'react';
import { Center,Text, VStack} from '@chakra-ui/react';
const About = () => {
  return (
    <div className='nav-link about'>
     
    
      <Center  bgGradient="background: linear-gradient(109.52deg, #141414 -0.44%, #1A1828 102.8%);
        " id="about" className='about section' >
        <VStack
          gap="40px"
          w={"100%"}
          p={{ base: "50px 30px", md: "80px 100px" }}
        >
          <Text fontWeight={"bold"} fontSize={"4xl"} >
            About Me
          </Text>
          <Text fontSize={{ base: "1.5rem", md: "2xl" }} id="user-detail-intro" >
          An ambitious and detailed oriented full-stack web developer with the ability
to learn fast and collaborate with innovative teams. Proficient in JavaScript,
HTML, CSS, React, and Node.js with 1200+ hours of hands-on coding
experience gained from a top coding bootcamp in India.Excited to bring my
passion for coding and dedication to delivering high quality work to
collaborative work environment.
       
          </Text>
        </VStack>
      </Center>
    </div>
  );
};

export default About;
