import React, { useState } from "react";
import "./styles.css";
import { musicDB } from "./MusicDB";

// for accessing the keys
var musicdict = Object.keys(musicDB);

export default function App() {
  // initial state load is at English
  const [selectedGenre, setSelectedGenre] = useState("English");

  // Click Handler => selects the genre
  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎧Feel the Music!</h1>
      <div>
        {/* renders the buttons at first render */}
        {musicdict.map((genre) => (
          // sets genre by button click
          <button
            onClick={() => genreClickHandler(genre)}
            className="genreButton"
          >
            {genre}
          </button>
        ))}
      </div>

      {/* return the list */}
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicdict[selectedGenre].map((music) => (
            <li key={music.name} className="list">
              <p>{music.name}</p>
              <p>{music.rating}</p>
              <p>{music.singer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
