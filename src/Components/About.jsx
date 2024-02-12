import React from "react";
import { Center, Text, VStack } from "@chakra-ui/react";
const About = () => {
  return (
    <div className="nav-link about">
      <Center
        bgGradient="background: linear-gradient(109.52deg, #141414 -0.44%, #1A1828 102.8%);
        "
        id="about"
        className="about section"
      >
        <VStack
          gap="40px"
          w={"100%"}
          p={{ base: "50px 30px", md: "80px 100px" }}
        >
          <Text fontWeight={"bold"} fontSize={"4xl"}>
            About Me
          </Text>
          <Text fontSize={{ base: "1.5rem", md: "2xl" }} id="user-detail-intro">
            Experienced front-end web developer with a track record of
            successfully delivering insurance products using React, Next.js, and
            TypeScript. Over 9 months of hands-on industrial experience, coupled
            with foundational skills acquired from a top coding bootcamp in
            India. A quick learner and detail-oriented professional proficient
            in React, JavaScript, TypeScript, HTML, CSS,Node,Express and Mongo
            DB. Passionate about coding and dedicated to consistently delivering
            high-quality work.
          </Text>
        </VStack>
      </Center>
    </div>
  );
};

export default About;
