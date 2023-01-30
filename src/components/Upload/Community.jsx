import React from "react";
import { motion } from "framer-motion";

import { FaUsers } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { verifyActions } from "@/store/Navbar/Navbar.actions";

const Community = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.4, delay: 0.05 }}
      className="bg-black p-2 rounded-md text-2xl cursor-pointer"
      onClick={() => dispatch(verifyActions(true))}
    >
      <FaUsers />
    </motion.div>
  );
};

export default Community;
