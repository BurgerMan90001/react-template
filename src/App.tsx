import "./assets/css/App.css";
import { Link } from "react-router";
//import Image from "./Image";
import List from "./components/List";

function App() {
  const animals = ["Lion", "Sheep", "Moose"];

  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals} />
      {/*<Image />*/}
      <Link to="profile">Profile Page</Link>
    </>
  );
}
export default App;
