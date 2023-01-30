import React from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utils/Firebase";
import { useDispatch } from "react-redux";
import domtoimage from "dom-to-image";
import { motion } from "framer-motion";

import { FaUsers } from "react-icons/fa";
import { setDoc, collection, doc, getDoc } from "firebase/firestore";

const Community = ({ user }) => {
  const style = {
    transform: "scale(1.8)",
    transformOrigin: "top left",
    left: "0px",
    height: "auto",
    width: "auto",
  };

  const SendingImageToCommunity = async ({ name, id, username }) => {
    console.log("uploading");
    const container = document.querySelector("#container");
    container.classList.add("image");
    const param = {
      quality: 1,
      height: container.offsetHeight * 1.8,
      width: container.offsetWidth * 1.8,
      style,
    };
    //image download
    try {
      const userDocRef = doc(db, "images", username.toLowerCase());
      const imageRef = ref(storage, `${name} - ${id}`);
      let dataUrl = await domtoimage.toPng(container, param);
      const img = await fetch(dataUrl);
      const imgBlob = await img.blob();
      const upBytes = await uploadBytes(imageRef, imgBlob);
      console.log("uploaded");
      container.classList.remove("image");

      const downloadURL = await getDownloadURL(upBytes.ref);
      // const snapshot = getDoc(db);
      // console.log(snapshot.exists());

      await setDoc(userDocRef, {
        image: downloadURL,
        ...user,
      });
      console.log("Added");

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.4, delay: 0.05 }}
      className="bg-black p-2 rounded-md text-2xl cursor-pointer"
      onClick={() => SendingImageToCommunity(user)}
    >
      <FaUsers />
    </motion.div>
  );
};

export default Community;
