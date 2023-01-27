import React, { useState } from "react";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

import { db } from "../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

import toast, { Toaster } from "react-hot-toast";

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: "free",
});

// Customize the dropzone UI (see "customization"):
const options = {
  multi: true,
  styles: {
    colors: {
      primary: "#000", // Hex codes only.
      active: "#212121",
    },
    fontSizes: {
      base: 16,
    },
  },
};

const Upload = () => {
  const sendingImages = (files) => {
    const colRef = collection(db, "images");
    return files.map((file) => {
      addDoc(colRef, {
        image: file.fileUrl,
      }).then(() => toast("Added"));
    });
  };

  return (
    <>
      <UploadDropzone
        uploader={uploader} // Required.
        options={options} // Optional.
        width="600px" // Optional.
        height="275px" // Optional.
        onUpdate={(files) => sendingImages(files)}
      />
      <Toaster position="bottom right" />
    </>
  );
};

export default Upload;
