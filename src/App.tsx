import NavBar from "./components/NavBar";
import "./index.css";
import { Container, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Home from "./pages/home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const location = useLocation();
  return (
    <Container maxWidth="1200px" minHeight="1600px">
      <NavBar />
      <AnimatedRoutes />
    </Container>
  );
}

export default App;
