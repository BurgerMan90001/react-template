import { useEffect } from "react";
import "./assets/css/App.css";
import { useState } from "react";
function ListItem({ animal }: { animal: string }) {
  return <li className="animal">{animal}</li>;
}
function List({ animals }: { animals: string[] }) {
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
function Image({ img }: { img: string }) {
  return (
    <>
      <img src={img}></img>
    </>
  );
}
function fetchImage(setImg: (url: string) => void) {
  useEffect(() => {
    fetch("https://api.nekosia.cat/api/v1/images/random")
      .then((response) => response.json())
      .then((data) => {
        setImg(data.image.original.url);
      })
      .catch((reason) => console.error(reason));
  }, []);
}
function App() {
  const animals = ["Lion", "Sheep", "Moose"];
  const [img, setImg] = useState("");
  fetchImage(setImg);
  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals} />
      <Image img={img} />
    </>
  );
}

export default App;
