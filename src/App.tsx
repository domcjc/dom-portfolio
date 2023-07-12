import { Grid, GridItem, Show, Text, Heading, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./components/ColorModeSwitch";
import NavBar from "./components/NavBar";
import "./index.css";
import ProjectGrid from "./components/ProjectGrid";
import { Container } from "@chakra-ui/react";
import Animation from "./components/Animation";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <Container maxWidth="1200px">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Grid
        templateAreas={{
          base: `"nav" "main" "content"`,
        }}
      >
        {" "}
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem
          area="main"
          height="20%"
          paddingTop="110px"
          paddingBottom="100px"
          minWidth={606}
        >
          <Heading
            paddingLeft="55px"
            fontSize="8xl"
            minWidth={606}
            textShadow="0 0 10px white"
          >
            Dom Coleman.
          </Heading>
          <br></br>
          <Text fontFamily="JetBrains Mono" paddingLeft="70px">
            {" "}
            Hi, I'm Dom.
          </Text>
          <br></br>
          <Text
            fontFamily="JetBrains Mono"
            paddingLeft="70px"
            paddingRight="80px"
          >
            {" "}
            I am a web developer with a keen interest in frontend and UI/UX. I
            Graduated from the University of Auckland with a BSc in Computer
            Science and am an avid enthusiast in all pertaining to
            web-development.
          </Text>
        </GridItem>
        <GridItem area="content" height="100%" minWidth={606}>
          <ProjectGrid />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
