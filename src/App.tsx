import "./assets/css/App.css";
import { Link } from "react-router";
//import Image from "./Image";
import List from "./components/List";
import { createContext } from "react";
interface ListContextType {
  animals: string[];
}
const ListContext = createContext<ListContextType>({
  animals: [],
});

function App() {
  const animals = ["Lion", "Sheep", "Moose"];
  return (
    <ListContext value={{ animals }}>
      <h1>Animals: </h1>
      <List />
      {/*<Image />*/}
      <Link to="profile">Profile Page</Link>
    </ListContext>
  );
}
export default App;

export { ListContext };
