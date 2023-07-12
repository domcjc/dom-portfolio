import React from "react";
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
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

interface Props {
  project: string;
  imagename: string;
}

const ProjectCard = ({ project, imagename }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Link to="/projects">
      <Card
        paddingBottom={30}
        borderRadius={12}
        bg={colorMode === "dark" ? "#4D57AC" : "#E9CCD3"}
        boxShadow="xl"
      >
        <Text
          paddingLeft="22px"
          paddingBottom="20px"
          fontSize="13pt"
          textAlign="left"
          fontFamily="JetBrains Mono"
          marginTop="14px"
        >
          {project}
        </Text>

        <CardBody>
          <Card
            borderRadius={12}
            overflow="hidden"
            bgGradient={
              colorMode === "dark"
                ? "linear(to-l, #7B77C9, #453DCE)"
                : "linear(to-l, #FEEEFF, #FEEEFF, #ffe0e8, #ffe0e8)"
            }
            boxShadow="md"
          >
            <Image src={imagename} alt={project} />
            <CardBody>
              <Text
                fontSize="15pt"
                textAlign="left"
                fontFamily="JetBrains Mono"
                marginTop="14px"
              >
                <HStack>
                  <AiFillHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                </HStack>
              </Text>
            </CardBody>
          </Card>
          <Text
            fontSize="11pt"
            textAlign="left"
            fontFamily="JetBrains Mono"
            marginTop="14px"
            paddingTop="7px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua.
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
