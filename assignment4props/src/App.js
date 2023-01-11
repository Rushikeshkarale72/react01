import React from 'react';
import './index.css';

function App() {
  const Tab = (props) =>{
    return(
      <div className="Tab">
        <div className="box" style={{backgroundColor:props.bgcolor}}>
        </div>
        <div className="content">
          <h2>{props.heading}</h2>
          <p style={{color:props.bgcolor}}>{props.code}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
       <Tab heading="#C14911" code="BROWN" bgcolor='#C14911'></Tab>
      <Tab heading="#333333" code="GRAY" bgcolor='#333333'></Tab>
      <Tab heading="#000000" code="BLACK" bgcolor='#000000'></Tab>
      <Tab heading="#CCCCCC" code="LIGHT GRAY" bgcolor='#CCCCCC'></Tab>
      <Tab heading="#C90B0B" code="RED" bgcolor='#C90B0B'></Tab>
      <Tab heading="#FF8000" code="ORANGE" bgcolor='#FF8000'></Tab>
      <Tab heading="#FFF500" code="YELLOW" bgcolor='#FFF500'></Tab>
      <Tab heading="#FF6663" code="PINK" bgcolor='#FF6663'></Tab>
      <Tab heading="#38BB14" code="GREEN" bgcolor='#38BB14'></Tab>
      <Tab heading="#7E41A2" code="PURPLR" bgcolor='#7E41A2'></Tab>
     
      
    </div>
  );
}

export default App;