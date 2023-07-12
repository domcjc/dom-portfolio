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
import Home from "./pages/home";

function App() {
  return (
    <Container maxWidth="1200px">
      <NavBar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
