import "../Components/Food_api.css";
const Food_api = (props) => {
  // console.log(props.data.recipe.url);
  return (
    <>
      <div className="card">
        <div className="left">
          {<img src={props.data.recipe.image} alt="dish_img" />}
          <h2>{props.data.recipe.label}</h2>
        </div>
        <div className="right">
          <div>
            <h1>Ingridients</h1>
            <ol>
              {props.data.recipe.ingredientLines.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </div>
          <div>
            <h1>Diet Labels</h1>
            <ol>
              {props.data.recipe.dietLabels.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </div>
          <div className="navigation">
            <a href={props.data.recipe.url}>Click To Read More ➡</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Food_api;
