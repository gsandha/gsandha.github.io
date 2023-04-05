import {
    Box,
    Button,
    FormControl,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Text,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { MdMarkEmailUnread } from "react-icons/md";
  import { RiSendPlaneFill } from "react-icons/ri";
  import { BsFillTelephoneInboundFill, BsGithub, BsLinkedin } from "react-icons/bs";
  import { FaUserTie } from "react-icons/fa";
  
  const Contact = () => {
    return (
      <div className="nav-link contact">

      <VStack p="100px 0" maxW={"1000px"} m="auto" id="contact" gap="10">
        <Text fontWeight={"bold"} fontSize={"4xl"}>
          Get In Touch
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems={"center"}
          w={"100%"}
        >
          <HStack gap={{ base: "5", md: "10" }} my="4">
            <Link id="contact-email" href="mailto:gurpreetsandha001@gmail.com" >
            <Text fontSize={'0.5px'}>email</Text>
              <Icon   as={MdMarkEmailUnread} w={"8"} h={"8"} color="telegram.800" />
            </Link>
            <Link id="contact-phone"  href="tel:+917990466764"> 
            <Text fontSize={'0.5px'}>7990466764</Text>
              <Icon 
                as={BsFillTelephoneInboundFill}
                w={"8"}
                h={"8"}
                color="telegram.800"
              />
            </Link>
            <Link id="contact-linkedin"
              href="https://www.linkedin.com/in/gsandha/"
              target="_blank"
            >
              <Icon as={BsLinkedin} w={"8"} h={"8"} color="telegram.800" />
            </Link>
            <Link  id="contact-github" href="https://github.com/gsandha" target="_blank">
              <Icon as={BsGithub} w={"8"} h={"8"} color="telegram.800" />
            </Link>
          </HStack>
          <Box
            rounded={"lg"}
            boxShadow={"lg"}
            p={6}
            maxWidth="450px"
            width={"100%"}
          >
            <form
              action="https://formsubmit.co/sandhagurpreet0@gmail.com"
              method="POST"
            >
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftElement children={<FaUserTie color="#525252" />} />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={<MdMarkEmailUnread color="#525252" />}
                  />
                  <Input
                    type="text"
                    name="email"
                    placeholder="Enter email address"
                    required
                  />
                  gurpreetsandha001@gmail.com
                </InputGroup>
                <FormControl isRequired>
                  <Textarea
                    name="message"
                    placeholder="Enter your message....."
                    />
                </FormControl>
                <Stack>
                  <Button
                    type="submit"
                    colorScheme="messenger"
                    _hover={{ bg: "blue.500" }}
                    rightIcon={<RiSendPlaneFill />}
                    >
                    Send Message
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </VStack>
                    </div>
    );
  };
  
  export default Contact;