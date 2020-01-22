import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";

const StyledGesture = styled(motion.div)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const Gesture = () => (
  <StyledGesture whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
);
