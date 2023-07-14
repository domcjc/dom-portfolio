import { SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import rubrixpage from "../assets/rubrixpage.png";
import bookpage from "../assets/bookpage.png";
import chessacademy from "../assets/chessacademy.png";
import otherproject from "../assets/otherproject.png";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

const ProjectGrid = () => {
  const [project, setProject] = useState([]);
  const [error, setError] = useState("");

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
      margin="auto"
      spacing="65px"
      paddingTop="100px"
      marginBottom="200px"
      justifyContent="center"
    >
      <ProjectCard
        imagename={rubrixpage}
        project={"Rubrix"}
        linkid={"/projects#project1"}
      ></ProjectCard>

      <ProjectCard
        imagename={bookpage}
        project={"Book Discussion Program"}
        linkid={"/projects#project2"}
      ></ProjectCard>

      <ProjectCard
        imagename={chessacademy}
        project={"Chess Academy"}
        linkid={"/projects#project3"}
      ></ProjectCard>

      <ProjectCard
        imagename={otherproject}
        project={"Barcode Scanner"}
        linkid={"/projects#project4"}
      ></ProjectCard>
    </SimpleGrid>
  );
};

export default ProjectGrid;
