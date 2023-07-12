import { SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import rubrixpage from "../assets/rubrixpage.png";
import bookpage from "../assets/bookpage.png";
import chessacademy from "../assets/chessacademy.png";
import otherproject from "../assets/otherproject.png";

const ProjectGrid = () => {
  const [project, setProject] = useState([]);
  const [error, setError] = useState("");

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing="65px">
      <ProjectCard imagename={rubrixpage} project={"Rubrix"}></ProjectCard>
      <ProjectCard
        imagename={bookpage}
        project={"Book Discussion Program"}
      ></ProjectCard>
      <ProjectCard
        imagename={chessacademy}
        project={"Chess Academy"}
      ></ProjectCard>
      <ProjectCard
        imagename={otherproject}
        project={"Barcode Scanner"}
      ></ProjectCard>
    </SimpleGrid>
  );
};

export default ProjectGrid;
