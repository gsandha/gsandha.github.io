import { Center, Flex, Text,  VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Link } from "react-scroll";
// import { getGithubStats } from "../Assets/Utils/stats.PNG";

const Statistics = () => {

 


  return (
  
    <VStack id="activity" pb="100px" bg="#f6f6f6" m="auto" gap={"40px"}>
  <Text p="60px" pb="0" fontWeight={"bold"} fontSize={"4xl"}>
    Activity
  </Text>
  <GitHubCalendar username="gsandha" class="react-activity-calendar" />
  <Flex direction="column">
    <Center pb="30px">
      <Link to="">
        <img id="github-stats-card"
          style={{height:"200px"}}
          alt="Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=gsandha&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
          />
      </Link>
    </Center>
    <Flex direction="row">
      <Center>
        <Link to="">
          <img id="github-top-langs"
            style={{height:"200px"}}
            alt="Gurpreet's Top Languages"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gsandha&langs_count=8&count_private=true&theme=react&hide_border=true&bg_color=0D1117"
         />
        </Link>
      </Center>
      <Center>
        <Link to="">
          <img id="github-streak-stats"
            style={{height:"200px"}}
            alt="Gurpreet's Top Languages"
            src="https://github-readme-streak-stats.herokuapp.com?user=gsandha"
         />
        </Link>
      </Center>
    </Flex>
  </Flex>
</VStack>

  );
};

export default Statistics;