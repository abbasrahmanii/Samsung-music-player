import React, { useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
import Player from "./components/Player";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Nav />
          <Landing
            songs={songs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            audioRef={audioRef}
            playSongHandler={playSongHandler}
            timeUpdateHandler={timeUpdateHandler}
          />
        </Route>
        <Route path="/player">
          <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            playSongHandler={playSongHandler}
            songInfo={songInfo}
          />
        </Route>
      </Switch>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
