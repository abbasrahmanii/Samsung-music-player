import React from "react";
import SongList from "./SongList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faPlay,
  faPause,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Landing = ({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  playSongHandler,
  timeUpdateHandler,
}) => {
  return (
    <LandingPage>
      <Main>
        <ul>
          {songs.map((song) => (
            <SongList
              key={song.id}
              id={song.id}
              song={song}
              songs={songs}
              setCurrentSong={setCurrentSong}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
              audioRef={audioRef}
            />
          ))}
        </ul>
      </Main>
      <Footer>
        <div>
          <img src={currentSong.cover} alt="img" />
          <div>
            <h2>{currentSong.name}</h2>
            <p>{currentSong.artist}</p>
          </div>
        </div>
        <PlayController>
          <li>
            <FontAwesomeIcon size="2x" icon={faChevronLeft} />
          </li>
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            onClick={playSongHandler}
          />
          <li>
            <FontAwesomeIcon size="2x" icon={faChevronRight} />
          </li>
        </PlayController>
      </Footer>
    </LandingPage>
  );
};

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #d3d6d3;
  position: relative;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  width: 90%;
  margin: 1rem auto;
  border-radius: 15px;
  padding-bottom: 4.5rem;
  ul {
    width: 100%;
    margin: 0rem auto;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 1rem;
  left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  min-height: 5vh;
  background-color: #fff;
  padding: 0 1rem;
  border-radius: 75px;
  border: 2px solid blueviolet;
  div {
    width: 95%;
    margin: 0.5rem auto;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      background-color: transparent;
      margin-left: 0.75rem;
      h2 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

const PlayController = styled.ul`
  display: flex;
  width: 15%;
  justify-content: space-between;
  align-items: center;
`;

export default Landing;
