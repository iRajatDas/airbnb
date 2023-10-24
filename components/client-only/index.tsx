import React, { FC } from "react";
import { motion } from "framer-motion";
import { fadeInFadeOut } from "@/lib/motion/fadeInFadeOut";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
  return <motion.div {...fadeInFadeOut}>{children}</motion.div>;
};

export default ClientOnly;
