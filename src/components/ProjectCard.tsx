import React from "react";
import { Card, CardBody, Image, Heading, Center, Text } from "@chakra-ui/react";
import rubrixpage from "../assets/rubrixpage.png";

interface Props {
  project: string;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card borderRadius={12} overflow="hidden" outline="1px #151533 solid">
      <Image src={rubrixpage} margin={"auto"} />
      <CardBody>
        <Text fontSize="13pt" textAlign="left" fontFamily="JetBrains Mono">
          {project}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
