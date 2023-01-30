import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utils/Firebase";
import { useDispatch } from "react-redux";
import domtoimage from "dom-to-image";
import { motion } from "framer-motion";

import { setDoc, doc } from "firebase/firestore";

import { downloadLoadingAction } from "@/store/Background/Background.actions";
import { verifyActions } from "@/store/Navbar/Navbar.actions";

const Verify = ({ user }) => {
  const [inputField, setInputField] = useState("");
  const dispatch = useDispatch();

  const style = {
    transform: "scale(1.8)",
    transformOrigin: "top left",
    left: "0px",
    height: "auto",
    width: "auto",
  };

  const SendingImageToCommunity = async ({ name, id, username }) => {
    if (inputField !== `twitter/${username}`) return;

    dispatch(downloadLoadingAction(true));
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
      dispatch(downloadLoadingAction(false));
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-60 z-50 flex justify-center items-center p-4">
      <motion.div
        animate={{ y: [-100, 30, 0] }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-[400px] py-8 px-4 border-2 border-black border-opacity-60 rounded-xl"
      >
        <h1 className="text-center font-bold text-xl">Community Showcase</h1>
        <p className="text-sm text-center opacity-75 mt-2">
          You can send your image to "Community Showcase" page, so that everyone
          can see it.
        </p>

        <p className="mt-8 opacity-80">
          To verify, type{" "}
          <span className="font-bold">twitter/{user.username}</span> below:
        </p>
        <input
          type="text"
          className="w-full border-2 border-[#555] px-2 py-1 rounded-md my-3"
          onChange={(e) => setInputField(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-red-800 py-2 text-white rounded-lg mt-4"
            onClick={() => dispatch(verifyActions(false))}
          >
            Cancel
          </button>
          <button
            onClick={() => SendingImageToCommunity(user)}
            className="bg-black py-2 text-white rounded-lg mt-4"
          >
            Add
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Verify;
