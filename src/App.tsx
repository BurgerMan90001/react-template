import { useEffect } from "react";
import "./assets/css/App.css";
import { useState } from "react";
function ListItem({ animal }) {
  return <li className="animal">{animal}</li>;
}
function List({ animals }) {
  if (!animals) {
    return <div>Loading...</div>;
  }
  if (animals.length === 0) {
    return <div>There are no animals</div>;
  }
  return (
    <ul>
      {animals.map((animal) => {
        return <ListItem key={animal} animal={animal}></ListItem>;
      })}
    </ul>
  );
}
function Image({ img }) {
  return (
    <>
      <img src={img}></img>
    </>
  );
}
function App() {
  const animals = ["Lion", "Sheep", "Moose"];
  const [img, setImg] = useState();
  useEffect(() => {
    fetch("https://api.nekosia.cat/api/v1/images/random")
      .then((response) => response.json())
      .then((data) => {
        setImg(data.image.original.url);
      })
      .catch((reason) => console.error(reason));
  }, []);
  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals} />
      <Image img={img} />
    </>
  );
}

export default App;
