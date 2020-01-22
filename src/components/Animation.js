import * as React from "react";
import { motion } from "framer-motion";

const styles = {
  background: "white",
  borderRadius: 30,
  width: 150,
  height: 150,
  margin: "auto"
};

export const Animation = () => (
  <motion.div animate={{ scale: 2, rotate: 360 }} style={styles} />
);
