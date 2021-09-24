import React from "react";
import styled from "styled-components";
import { playAudio } from "../util";

const SongList = ({
  song,
  songs,
  setCurrentSong,
  id,
  setIsPlaying,
  isPlaying,
  audioRef,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);

    playAudio(isPlaying, audioRef);

    setIsPlaying(true);
  };

  return (
    <Song onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name} />
      <div>
        <h2>{song.name}</h2>
        <p>{song.artist}</p>
      </div>
    </Song>
  );
};

const Song = styled.div`
  width: 95%;
  margin: 1.5rem auto;
  background-color: #76cec22e;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 15px;
    margin: 0.5rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    background-color: transparent;
    margin-left: 1rem;
    padding: 1rem 0;
  }
`;

export default SongList;
