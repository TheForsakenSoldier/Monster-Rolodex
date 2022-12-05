import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  /*  const filteredMonsters = monsters.filter((monster)=>{   //basically returns the value of the monsters with the str written in the input if nothing is written all are returned
    return(monster.name.toLowerCase().includes(searchField))
  }) */

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //get the users from an external website
      .then((response) => response.json()) //transform what i fetched to json
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      //basically returns the value of the monsters with the str written in the input if nothing is written all are returned
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase(); //lower casing the letters so i can compare strings
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Codex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// i have changed the app

export default App;
