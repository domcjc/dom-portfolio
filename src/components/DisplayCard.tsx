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
  Container,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import PictureCarousel from "./pictureCarousel";

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
        id={linkid}
        marginBottom="200px"
        paddingRight="40px"
      >
        <CardBody>
          <PictureCarousel />
          <Text
            paddingBottom="20px"
            fontSize="12pt"
            paddingLeft="40px"
            fontFamily="JetBrains Mono"
          >
            Rubrix is an encompassing web-based application that provides
            methods to create, modify and store rubrics, whilst also allowing
            the user to mark student work in-app.
            <br />
            <br />
            Along with a secure sign-on system, the application also allows for
            custom file downloads, uploads and exports, for easy distribution
            and collaborative work.
          </Text>
        </CardBody>
      </Card>
    </div>
  );
};

export default DisplayCard;
