import React from "react";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Avatar,
  Link,
} from "@chakra-ui/react";
import logo from "../Assets/Utils/v.png"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Link as ReachLink } from "react-scroll";
import resume from "../Assets/Utils/Gurpreet_Sandha_Resume.pdf"

const navItem = [
  { path: "home", name: "Home" ,className:"nav-link home"},
  { path: "about", name: "About" ,className:"nav-link about"},
  { path: "skills", name: "Skills",className:"nav-link skills" },
  { path: "projects", name: "Projects",className:"nav-link projects" },
  { path: "activity", name: "Activity"},
  { path: "contact", name: "Contact",className:"nav-link contact" },
];

// const secondryColor = "#2442d7";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="nav-menu">
      <chakra.header
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        position="fixed"
        top="0"
        zIndex={10}
        // bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
        backgroundColor="#111012"
        // bg="black"
        color="white"
      >
        <Flex justifyContent="space-between" mx="auto">
          <chakra.a
            href="/"
            title="Gurpreet Sandha"
            display="flex"
            alignItems="center"
          >
        <p style={{color:"#D7BEFF",fontSize:"20px",paddingLeft:"20px"}}> gsandha.io </p>
          </chakra.a> 
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            {navItem.map((item, i) => {
              return (
                <Link
                  as={ReachLink}
                  key={item.path}
                  activeClass={"active"}
                  to={item.path}
                  offset={item.path === "projects" ? -150 :item.path==="contact"? -70 :item.path==="activity"? -70 : item.path==="home"? -200 : -90}
                  spy={true}
                  smooth={true}
                  duration={700}
                  fontSize="18"
                  p="5px 20px"
                  borderRadius="5px"
                  _hover={{
                    textDecoration: "none",
                    bg: "white",
                    color: "black",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          
           <Link className="nav-link resume" 
         as={"a"}
            backgroundColor="#4018B3" w="150px" h="60px"  borderRadius="10px" alignItems="center" textAlign="center"
              display={{ base: "none", md: "flex" }}
              href="https://drive.google.com/uc?export=download&id=1-4LVo1ePnJFOI2c4pMk40caLVZMFqIUg"
              onClick={() => {            
                  window.open("https://drive.google.com/file/d/1-4LVo1ePnJFOI2c4pMk40caLVZMFqIUg/view?usp=sharing");
              }}
            >
              <Button  id="resume-button-1"
                // _hover={{ textDecoration: "none", bg: "white", color: "black" }}
                variant="solid"
                leftIcon={<AiOutlineDownload />}
                colorScheme="black"
              >
                Resume
              </Button>
            </Link>
          </HStack>
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              fontSize="20px"
              colorScheme={"blackAlpha"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
            />
            <VStack
              pos="absolute"
              left={0}
              right={0}
              top={16}
              display={isOpen ? "flex" : "none"}
              pb="6"
              rounded="sm"
              shadow="sm"
              bgGradient="radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);"
              // bg="black"
              color="white"
            >
              {navItem.map((item) => {
                return (
                  <Link
                    fontSize="xl"
                    fontWeight="500"
                    key={item.path}
                    as={ReachLink}
                    activeClass={"active"}
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={item.path === "skills" ? -180 : -60}
                    duration={700}
                    onClick={isOpen ? onClose : onOpen}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                target="_blank"
                href={resume}
                download="Gurpreet_Sandha_Resume"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  variant="solid"
                  leftIcon={<AiOutlineDownload />}
                  colorScheme="messenger"
                >
                  Download Resume
                </Button>
              </Link>
            </VStack>
          </Box>
        </Flex>
      </chakra.header>
    </div>
  );
}

