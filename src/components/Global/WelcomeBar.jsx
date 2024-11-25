import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoClose } from "react-icons/io5";

export default function WelcomeBar() {
  const [isActive, setIsActive] = useState(true);
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className={"bg-turquoise py-1"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: {duration: 0.3} }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="container">
            <div className="relative">
              <p className={"text-center text-xs font-semibold text-gunmetal mr-6 sm:mr-0"}>
                Welcome to SyDigital. Let's build something amazing together !
              </p>
              <IoClose
                size={20}
                className={
                  "absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer text-gunmetal hover:rotate-90 transition-all duration-300 ease-in-out"
                }
                onClick={() => setIsActive(false)}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
