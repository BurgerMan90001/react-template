import "./assets/css/App.css";

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
function App() {
  const animals = ["Lion", "Sheep", "Moose"];
  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals} />
    </>
  );
}

export default App;
