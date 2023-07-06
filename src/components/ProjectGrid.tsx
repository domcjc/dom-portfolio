import { SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import ProjectCard from "./projectcard";

const ProjectGrid = () => {
  const [project, setProject] = useState([]);
  const [error, setError] = useState("");

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="60px"
      spacing={10}
    >
      <ProjectCard project={"Rubrix"}></ProjectCard>
      <ProjectCard project={"Chess Academy"}></ProjectCard>
      <ProjectCard project={"Book Discussion Program"}></ProjectCard>
      <ProjectCard project={"Barcode Scanner"}></ProjectCard>
    </SimpleGrid>
  );
};

export default ProjectGrid;
