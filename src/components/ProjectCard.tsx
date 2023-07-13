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
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
interface Props {
  project: string;
  imagename: string;
  linkid: string;
}

const ProjectCard = ({ project, imagename, linkid }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Link to={linkid} reloadDocument>
      <Card
        paddingBottom={30}
        borderRadius={12}
        bgGradient={
          colorMode === "dark"
            ? "linear(to-l, #203A43, #203A43, #203A43)"
            : "linear(to-l, #C4E0E5, #C4E0E5)"
        }
        boxShadow={colorMode === "dark" ? "dark-lg" : "dark-lg"}
      >
        <Text
          paddingLeft="27px"
          paddingBottom="20px"
          fontSize="14pt"
          textAlign="left"
          fontFamily="JetBrains Mono"
          marginTop="20px"
        >
          {project}
        </Text>

        <CardBody>
          <Card
            borderRadius={12}
            overflow="hidden"
            bgGradient={
              colorMode === "dark"
                ? "linear(to-l, #3c535b, #586b72)"
                : "linear(to-l, #C4E0E5, #F0FFF4)"
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
