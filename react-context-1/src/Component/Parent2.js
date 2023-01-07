import React, { useContext } from 'react'
import context from './Context';
import Navbar from './Navbar';
function Parent2() {
    const theme = useContext(context);
    console.log("in p2", theme);
  return <div className={theme ? "light" : "dark"}>
    <Navbar />
    <h1>You can mail me help@geekster.in</h1>
  </div>;
}

export default Parent2