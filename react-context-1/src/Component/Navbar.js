import React,{useContext} from 'react'
import context from './Context'
import{ Link } from 'react-router-dom'
function Navbar() {
  const theme = useContext(context);
  // console.log("in navbar", theme)
  return (
    <div>
           <Link to="/">Home</Link>
            <br></br>
            <Link to="/Contact">Contact</Link>
            <br></br>
            <Link to="/Service">Service</Link>
            <br></br>
      
       </div>
  )
}

export default Navbar