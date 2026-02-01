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

export default List;
