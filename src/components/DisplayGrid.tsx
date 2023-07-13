import { SimpleGrid, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import DisplayCard from "./DisplayCard";
import rubrixpage from "../assets/rubrixpage.png";
import bookpage from "../assets/bookpage.png";
import chessacademy from "../assets/chessacademy.png";
import otherproject from "../assets/otherproject.png";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

const DisplayGrid = () => {
  const [project, setProject] = useState([]);
  const [error, setError] = useState("");

  return (
    <SimpleGrid columns={{ sm: 1, md: 1, lg: 1, xl: 1 }} spacing="200px">
      <DisplayCard
        imagename={rubrixpage}
        project={"Rubrix"}
        linkid={"project1"}
      ></DisplayCard>

      <DisplayCard
        imagename={bookpage}
        project={"Book Discussion Program"}
        linkid={"project2"}
      ></DisplayCard>

      <DisplayCard
        imagename={chessacademy}
        project={"Chess Academy"}
        linkid={"project3"}
      ></DisplayCard>

      <DisplayCard
        imagename={otherproject}
        project={"Barcode Scanner"}
        linkid={"project4"}
      ></DisplayCard>
    </SimpleGrid>
  );
};

export default DisplayGrid;
