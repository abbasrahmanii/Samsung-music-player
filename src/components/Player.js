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

const Player = ({
  currentSong,
  isPlaying,
  playSongHandler,
  songInfo,
  setSongInfo,
  audioRef,
  skipTrackHandler,
  songs,
  setSongs,
}) => {
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const background = {
    background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
  };
  const track = {
    transform: `translateX(${songInfo.animation}%)`,
  };

  const likeHandler = async () => {
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          like: !song.like,
        };
      } else {
        return {
          ...song,
        };
      }
    });
    await setSongs(newSong);
  };

  return (
    <PlayerStyle style={background}>
      <Image>
        <img src={currentSong.cover} alt={currentSong.name} />
      </Image>
      <Control>
        <Link to="/">
          <FontAwesomeIcon size="2x" icon={faMusic} />
        </Link>
        <div className="name">
          <h2>{currentSong.name}</h2>
          <p>{currentSong.artist}</p>
        </div>
        <FontAwesomeIcon
          className={`${currentSong.like ? "like" : "dislike"}`}
          onClick={likeHandler}
          size="2x"
          icon={faHeart}
          color="#fff"
        />
        <div className="time-control">
          <input
            type="range"
            min="0"
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div className="control-top" style={track}></div>
        </div>
        <div className="time">
          <span>{getTime(songInfo.currentTime)}</span>
          <span>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</span>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon
              size="2x"
              icon={faChevronLeft}
              onClick={() => skipTrackHandler("prev")}
            />
          </li>
          <FontAwesomeIcon
            onClick={playSongHandler}
            size="2x"
            icon={isPlaying ? faPause : faPlay}
          />
          <li>
            <FontAwesomeIcon
              size="2x"
              icon={faChevronRight}
              onClick={() => skipTrackHandler("next")}
            />
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
  align-items: center;
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
  flex: 1 35rem;
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 2rem;
      text-shadow: black;
    }
    p {
      font-size: 1rem;
      font-weight: lighter;
    }
  }
  .dislike {
    color: #fff;
  }
  .like {
    color: #e96060;
  }

  .time-control {
    width: 75%;
    height: 0.5rem;
    border-radius: 0.5rem;
    /* margin: 1rem auto; */
    background-color: #ffffff55;
    position: relative;
    overflow: hidden;
    input[type="range"] {
      width: 100%;
      background-color: transparent;
      cursor: pointer;
      --webkit-appearance: none;
      ::-webkit-slider-thumb {
        --webkit-appearance: none;
        width: 0.5rem;
        height: 0.5rem;
      }
      ::-moz-range-thumb {
        -webkit-appearance: none;
        background-color: transparent;
        border: 0;
      }
    }
    .control-top {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 0.5rem;
      position: absolute;
      top: 0;
      left: -100%;
      transform: translateX(0%);
      pointer-events: none;
    }
  }
  .time {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    width: 35%;
    /* margin: 1rem auto; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Player;
