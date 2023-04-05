import { Grid, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import node from "../Assets/Tech_Stack/node.png";

import css from "../Assets/Tech_Stack/css.png";
import javaScript from "../Assets/Tech_Stack/js.png";
import chakra from "../Assets/Tech_Stack/chakra.png";

import gitHub from "../Assets/Tech_Stack/github.png";
//   import git from "../Assets/Tech_Stack/git-icon.svg";
import mongoDb from "../Assets/Tech_Stack/mongo.png";
//   import nodeJs from "../Assets/Tech_Stack/nodejs-icon.svg";
//   import reactLogo from "../Assets/Tech_Stack/react.svg";
import reduxLogo from "../Assets/Tech_Stack/redux.png";
import reactLogo from "../Assets/Tech_Stack/React1.png";
import bootStrap from "../Assets/Tech_Stack/Bootstrap.jpg";
import html from "../Assets/Tech_Stack/html5.png";

import React from "react";

const TechStack = () => {
  const techStack = [
    {
      name: "React",
      image: reactLogo,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },
    {
      name: "HTML",
      image: html,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },
    {
      name: "Chakra UI",
      image: chakra,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },

    {
      name: "CSS",
      image: css,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },
    {
      name: "Javascript",
      image: javaScript,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },
    {
      name: "Bootstrap",
      image: bootStrap,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },
    {
      name: "Node.js",
      image: node,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },
    {
      name: "Redux",
      image: reduxLogo,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },
    {
      name: "Mongo DB",
      image: mongoDb,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },

    {
      name: "Github",
      image: gitHub,
      "class-card": "skills-card",
      "class-card-img": "skills-card-img",
      "class-card-name": "skills-card-name",
    },
  ];

  return (
    <>
      <div className="nav-link skills" id="skills">
        <VStack
          p={{ base: "50px 30px", md: "80px 100px" }}
          gap="40px"
          bg="#f6f6f6"
        >
          <Text id="skills" fontWeight={"bold"} fontSize={"4xl"}>
            Tools & Skills
          </Text>
          <Grid
            gap="20px"
            templateColumns={{ base: "repeat(3,1fr)", md: "repeat(5,1fr)" }}
          >
            {techStack.map((el, i) => {
              return (
                <VStack p="20px" key={el.name} className={el["class-card"]}>
                
                    <Image
                      className={el["class-card-img"]}
                      h="100%"
                      maxW={i === 0 ? "60%" : "60px"}
                      src={el.image}
                    />
                    <Text 
                    className={el["class-card-name"]}
                    >
                    {el.name}
                    </Text>
                 
                </VStack>
              );
            })}
          </Grid>
        </VStack>
      </div>
    </>
  );
};

export default TechStack;
