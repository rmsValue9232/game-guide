import logo from "../assets/logo.png";
import "../styles/App.css";
import "./GameCard";
import GameCard from "./GameCard";
import "./Search";
import Search from "./Search";
import { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);
  const [card, setCard] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0c5ca09088msh3d96b5cd5f850c1p1a8eebjsn014728bb6bbe",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch("https://mmo-games.p.rapidapi.com/games", options)
      .then((response) => response.json())
      .then((response) => {
        setGames(response);
      })
      .catch((err) => console.error(err));
  }, []);
  // console.log(games);


  useEffect(() => {
    let cardArr = games.map((game) => (
      <GameCard
        title={game.title}
        thumbnail={game.thumbnail}
        genre={game.genre}
        platform={game.platform}
        date={game.release_date}
        id={game.id}
      />
    ));
    setCard(cardArr);
  },[games]);


  const searchGames = async (title) => {
    let filtered = games.filter((game) => {
      let exp = new RegExp(title, "i");
      return exp.test(game.title);
    });
    setGames(filtered);
    // console.log(filtered);
  };


  const onSearchFieldChange = (e) => setSearchText(e.target.value);
  // const onSearchFieldKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     searchGames(searchText);
  //   }
  // };

  return (
    <>
      <header className="flex flex-col md:flex-row flex-shrink-0 items-center md:justify-center py-4 gap-4">
        <img src={logo} alt="logo" className=" w-24 md:w-32" />
        <h1 className=" text-3xl md:text-7xl font-bold font-secular bg-primary px-4 py-3">
          Game-Guide
        </h1>
      </header>
      <Search onChange={onSearchFieldChange} searchF = {searchGames} />
      <main className="mt-4 mb-4 flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-center gap-4 sm:gap-6">
        {card.map((c) => c)}
      </main>

      <footer className=" border-t-2 border-t-foreground py-4 text-center">
        <p className="">
          API provided by{" "}
          <a
            href="https://www.mmobomb.com/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            MMO Games API - By MMOBomb
          </a>
        </p>
        <p>
          Logo icon provided by{" "}
          <a
            href="https://www.flaticon.com/free-icons/gaming"
            target="_blank"
            rel="noopener noreferrer"
          >
            Smashicons - Flaticon
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
