import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faSearch,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <NavStyle>
      <Header>
        <h1>SAMSUNG Music</h1>
        <div>
          <Link to="/player">
            <FontAwesomeIcon size="2x" icon={faMusic} />
          </Link>
          <FontAwesomeIcon size="2x" icon={faSearch} />
          <FontAwesomeIcon size="2x" icon={faEllipsisV} />
        </div>
      </Header>
      <Navbar>
        <ul>
          <li>
            <a href="#">Favorites</a>
          </li>
          <li>
            <a href="#" className="active">
              Tracks
            </a>
          </li>
          <li>
            <a href="#">Playlists</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Artists</a>
          </li>
          <li>
            <a href="#">Folders</a>
          </li>
        </ul>
      </Navbar>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  background-color: #d3d6d3;
`;

const Header = styled.header`
  display: flex;
  min-height: 15vh;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 1rem auto;
  color: #272525;
  div {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      /* padding: 0.5rem; */
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  min-height: 5vh;
  width: 90%;
  margin: 0 auto;
  ul {
    display: flex;
    width: 50%;
    margin-left: auto;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    a {
      color: #272525;
      text-decoration: none;
      &[className="active"] {
        font-size: 1.3rem;
        color: #111;
        font-weight: 600;
      }
    }
  }
`;

export default Nav;
