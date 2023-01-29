import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export const png = async ({ user }) => {
  const container = document.querySelector("#container");
  container.classList.add("image");
  const style = {
    transform: "scale(1.8)",
    transformOrigin: "top left",
    left: "0px",
    height: "auto",
    width: "auto",
  };
  const param = {
    quality: 1,
    height: container.offsetHeight * 1.8,
    width: container.offsetWidth * 1.8,
    style,
  };
  //image download
  try {
    let dataUrl = await domtoimage.toPng(container, param);
    saveAs(dataUrl, `${user.name} - ${user.id}.png`);
    container.classList.remove("image");
    return;
  } catch (error) {
    console.error("Something was wrong!");
  }
};
