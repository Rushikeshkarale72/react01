import Food_api from './Components/Food_api';
import './App.css';
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [searchRecipe, setSearchRecipe] = useState("mango");
  // const [inp, setInp] = useState("");
  const refvalue = useRef();
  // console.log(refvalue.current.value);
  useEffect(() => {
    // if (searchRecipe !== "") { id = 49ee95f6  key = 
// f86873cc24c0da94061839e0cba0df4e	—


 
    fetch(
      `https://api.edamam.com/search?q=${searchRecipe}&app_id=49ee95f6&app_key=f86873cc24c0da94061839e0cba0df4e`
    )
      .then((res) => res.json())
      .then((mydata) => {
        setData(mydata);
      });
    // }
  }, [searchRecipe]);
  // console.log(data);
  return (
    <div className="App">
      <input
        type="text"
        defaultValue="mango"
        // onChange={(e) => setInp(e.target.value)}
        ref={refvalue}
      />
      <button onClick={() => setSearchRecipe(refvalue.current.value)}>
        Search Recipe
      </button>
      <div className="display_recipes">
        {data === "" ? (
          <h1>YUMMIE!</h1>
        ) : (
          data.hits.map((item) => {
            return <Food_api key={item.recipe.image} data={item} />;
          })
        )}
      </div>
    </div>
  );
}

