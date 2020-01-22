import { motion } from "framer-motion";
import styled from "styled-components";
import * as React from "react";

const StyledDrag = styled(motion.div)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const Drag = () => (
  <StyledDrag
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50
    }}
  />
);
