import React, { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../firebase/Firebase";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const colRef = collection(db, "images");

  useEffect(() => {
    onSnapshot(colRef, async (snapshot) => {
      dispatch({
        type: "ADD",
        payload: snapshot.docs.map((data) => ({ ...data.data(), id: data.id })),
      });
    });
  }, []);

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
