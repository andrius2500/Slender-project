import { motion } from "framer-motion";

const TransitionWrapper = ({ children, transitionDuration = 2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: transitionDuration }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
