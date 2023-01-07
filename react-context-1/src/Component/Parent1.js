import React, { useContext } from "react";
import context from "./Context";
import Navbar from "./Navbar";
function Parent1() {
    const theme = useContext(context);
    // console.log("in p1", theme);
  return <div className={theme ? "light" : "dark"}>
  <Navbar/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>;
}

export default Parent1;