import { Grid, GridItem, Show, Text, Heading, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./components/ColorModeSwitch";
import NavBar from "./components/NavBar";
import "./index.css";
import ProjectGrid from "./components/ProjectGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "content"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        area="main"
        height="20%"
        paddingTop="110px"
        paddingBottom="100px"
      >
        <Heading paddingLeft="60px" fontSize="10vw">
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
          paddingRight="50px"
        >
          {" "}
          I am a aspiring web developer with a keen interest in frontend and
          UI/UX.
        </Text>
      </GridItem>
      <GridItem area="content" height="100%">
        <ProjectGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
