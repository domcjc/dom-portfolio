import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Animation = () => {
  return (
    <Container display="flex" alignItems="left" justifyContent="left">
      <ChakraBox
        animate={{
          scale: [0.5, 1],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        Dom Coleman.
      </ChakraBox>
    </Container>
  );
};

export default Animation;
