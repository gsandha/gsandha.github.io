import { Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import random from "../Assets/Utils/Random.PNG"
import mm from "../Assets/Utils/Mentimeter.PNG"
import gitHub from "../Assets/Utils/GithubLogo.png";
//  import deployed from "../Assets/live.png";
// import ProjectCard from "./ProjectCard";
import es1 from "../Assets/Utils/Elite.PNG"
import bnb1 from "../Assets/Utils/SkyTable.PNG"
import vigor from "../Assets/Utils/Vigor.PNG"
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const sampleProject = [
     {
      title: "VIGOR  ",
      desc: "Vigor is an Indian online retailer for health and wellness products like supplements, vitamins, fitness equipment, and more. They also offer services like diet plans, weight loss programs, and expert advice.",
      tech: ["REACT","REDUX","CHAKRA UI","MOCK API"],
      gitLogo: gitHub,
      gitLink: "https://github.com/harry-io/dirty-parcel-1754",
      liveLink: "https://dirty-parcel-1754.vercel.app/",
      image: vigor,
    },
    {
      
      title: "ELITE STORE",
      desc: "Elite Store is a U.S web store which sells cosmetics and skin care products. This was a group project. I am responsible for creating Hompage, Skincare page and Fragrance page and their API's",
      tech: ["HTML","CSS","JAVASCRIPT","BOOTSTRAP"],
      gitLogo: gitHub,
      gitLink: "https://github.com/gsandha/fluffy-collar-7061",
      liveLink: "https://deft-bubblegum-3db2c3.netlify.app/index.html",
      image: es1,
    },
    {
      title: "SKY TABLE",
      desc: "SkyTable is a cloud-based platform that combines spreadsheets and databases to help individuals and teams organize and manage information. It's easy to use and is highly customizable",
      tech: ["HTML","CSS","JAVASCRIPT"],
      gitLogo: gitHub,
      gitLink: "https://github.com/Rahulyh010/daily-wrist-2042",

      liveLink: "https://sky-table.netlify.app/",
      image: bnb1,
    },
    {
     title: "MENTI METER",
     desc: "Mentimeter is a software for interactive presentations and audience response. Presenters can create polls, quizzes, and Q&A sessions that the audience can answer via mobile devices. Results are displayed in real-time.",
     tech: ["HTML", "CSS", "JS"],
     gitLogo: gitHub,
     gitLink: "https://github.com/gsandha/-timely-wire-1936/tree/day5",
     liveLink: "https://classy-lebkuchen-dc0556.netlify.app/",
     image: mm,
   },
   
  ];
// console.log(sampleProject)
  return (
    <div id="projects" className="nav-link projects" >
      <VStack  p="20px 0" gap="20px">
        <Text fontWeight={"bold"} fontSize={{base:"2xl",md:"4xl"}}>
          Some Things I've Built
        </Text>
        <Grid className="project-card"
          p={{ base: "20px", md: "60px" }}
          pt="0"
          gap="40px"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
        >
          {sampleProject.map((el) => (
            <ProjectCard key={el.title} {...el} />
          ))}
        </Grid>
      </VStack>
    </div>
  );
};

export default Projects;