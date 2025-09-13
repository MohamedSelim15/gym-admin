import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: 30 },
};

const Modal = ({ isOpen, onClose, children, zIndex = 50 }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-opacity-50 fixed inset-0 flex items-center justify-center backdrop-brightness-50"
          style={{ zIndex }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="scroll-container h-[96%] flex items-center w-fit  rounded-lg "
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
