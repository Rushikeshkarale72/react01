import React, { useContext } from 'react'
import context from './Context';
import Navbar from './Navbar';
function Parent4() {
    const theme = useContext(context);
    console.log("in p4", theme);
  return <div className={theme ? "light" : "dark"}>
    <Navbar />
    <h1>Our service are not available</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</p>

  </div>;
}

export default Parent4