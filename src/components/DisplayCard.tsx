import React from "react";
import { useRef } from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Center,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

interface Props {
  project: string;
  imagename: string;
  linkid: string;
}

const DisplayCard = ({ project, imagename, linkid }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <Heading
        paddingBottom="20px"
        fontSize="16pt"
        paddingLeft="20px"
        fontFamily="JetBrains Mono"
      >
        {project}
      </Heading>
      <Card
        borderRadius={12}
        bg={colorMode === "dark" ? "#203A43" : "#C4E0E5"}
        height="700px"
        id={linkid}
        marginBottom="200px"
      ></Card>
    </div>
  );
};

export default DisplayCard;
