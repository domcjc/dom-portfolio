import { Grid, GridItem, Show } from "@chakra-ui/react";
import {
  ChakraProvider,
  Container,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import theme from "./theme";
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
        <Heading color={"#31d49d"} paddingLeft="60px" fontSize="10vw">
          Dom Coleman.
        </Heading>
      </GridItem>
      <GridItem area="content">
        <ProjectGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
