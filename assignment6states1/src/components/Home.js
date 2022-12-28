import React, { useState } from 'react'

function Home() {
    const [isLight, setMode] = useState(true);
    const handleToggle = () => {
        setMode(!isLight);
    }
    
    return (
      <div id="navbar" className={isLight ? "light" : "dark"}>
        <div>Overreacted</div>
        <button style={{color: "orange"}} onClick={handleToggle}>Toggle</button>
        <div>
        <h2 style={{color: "orange"}}>The WET Codbase</h2>
        <p>Sunday 4th, 2020 11 min read <br/>
            Cone waste your time with me
        </p>
        </div>

        <div>
        <h2 style={{color: "orange"}}>Goodby, Clean Code</h2>
        <p>Friday 29th, 2019 5 min read <br/>
            Let clean code guide you. Then let it go.
        </p>
        </div>

        <div>
        <h2 style={{color: "orange"}}>My Decade In Review </h2>
        <p>Saturday 11th, 2018 5 min read <br/>
           A personal reflection.
        </p>
        </div>

        <div>
        <h2 style={{color: "orange"}}>What Are The React Them Principles</h2>
        <p>Thursday 4th, 2015 5 min read
        </p>
        </div>



        </div>
    )
}
export default Home

