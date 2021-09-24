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
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animation,
    });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "next") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "prev") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
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
            skipTrackHandler={skipTrackHandler}
          />
        </Route>
        <Route path="/player">
          <Player
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            playSongHandler={playSongHandler}
            songInfo={songInfo}
            audioRef={audioRef}
            setSongInfo={setSongInfo}
            skipTrackHandler={skipTrackHandler}
            songs={songs}
            setSongs={setSongs}
          />
        </Route>
      </Switch>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
