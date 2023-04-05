import {
    Heading,
    HStack,
    Image,
    Link,
    Spacer,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";

  const ProjectCard = (props) => {
    const { title, desc, tech, gitLogo, gitLink, liveLink, image } =
      props;
  
    return (
      <div className="project-card" id="projects">

      <VStack minW="280px" gap="10px" bg="#f6f6f6" borderRadius="20px" boxShadow="md" p="20px">
        <Image borderRadius="10px" src={image} />
        <Heading p="10px" size="md" id="project-title" className="project-title">
          {title}
        </Heading>
        <Text p="5px 10px" fontSize="md" textAlign="justify" id="project-description" className="project-description">
          {desc}
        </Text>
        <Heading size="sm">Tech Stack</Heading>
        <Text size="" textAlign="center" id="project-tech-stack" color="red">
          {
            tech.join(" | ")
          }
        </Text>
        <Heading size="sm">Take a Look</Heading>
        <HStack w="80%">
          <Link target="_blank" href={gitLink} className="project-github-link">
            <Image w="30px" src={gitLogo} />
          </Link>
          <Spacer />
          <Link target="_blank" href={liveLink} className="project-deployed-link">
            LIVE
          </Link>
        </HStack>
      </VStack>
      </div>
    );
  };
  
  export default ProjectCard;