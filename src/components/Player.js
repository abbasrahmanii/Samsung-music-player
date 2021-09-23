import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, playSongHandler, songInfo }) => {
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <PlayerStyle>
      <Image>
        <img src={currentSong.cover} alt="" />
      </Image>
      <Control>
        <Link to="/">
          <FontAwesomeIcon icon={faMusic} />
        </Link>
        <h2>{currentSong.name}</h2>
        <p>{currentSong.artist}</p>
        <FontAwesomeIcon size="2x" icon={faHeart} color="#fff" />
        <div className="time-control"></div>
        <div className="time">
          <span>{getTime(songInfo.currentTime)}</span>
          <span>{getTime(songInfo.duration)}</span>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon size="2x" icon={faChevronLeft} />
          </li>
          <FontAwesomeIcon
            onClick={playSongHandler}
            size="2x"
            icon={isPlaying ? faPause : faPlay}
          />
          <li>
            <FontAwesomeIcon size="2x" icon={faChevronRight} />
          </li>
        </ul>
      </Control>
    </PlayerStyle>
  );
};

const PlayerStyle = styled.div`
  width: 100%;
  background-color: #82eeb8;
  color: #fff;
  min-height: 100vh;
  //ba'dan bayad beshe 100vh
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.div`
  flex: 1 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    border: 0;
    border-radius: 50px;
  }
`;
const Control = styled.div`
  flex: 1 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .time-control {
    width: 75%;
    height: 0.5rem;
    border-radius: 0.5rem;
    margin: 1rem auto;
    background-color: #fff;
  }
  .time {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    width: 35%;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Player;
