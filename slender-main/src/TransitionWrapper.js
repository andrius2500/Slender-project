import { motion } from "framer-motion";

const TransitionWrapper = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {props.children}
    </motion.div>
  );
};

export default TransitionWrapper;
