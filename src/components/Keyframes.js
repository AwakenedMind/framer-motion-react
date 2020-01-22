import { motion } from "framer-motion";
import styled from "styled-components";
import * as React from "react";

const StyledKeyframes = styled(motion.div)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const Keyframes = () => (
  <StyledKeyframes
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"]
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      loop: Infinity,
      repeatDelay: 1
    }}
  />
);
