import React from "react";
import { Card, CardBody, Image, Heading, Center } from "@chakra-ui/react";
import rubrixpage from "../assets/rubrixpage.png";

interface Props {
  project: string;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card borderRadius={12} overflow="hidden" bg="#636665">
      <Image src={rubrixpage} margin={"auto"} />
      <CardBody>
        <Heading fontSize="12pt" textAlign="left" color="#0be69d">
          {project}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
