import React, { useState } from "react";
import avator from "../images/logo2.png";
import "../App.css";
import styled from "styled-components";
import homeSet from "../images/homeSet.svg";
import useWebAnimation from "@wellyshen/use-web-animations";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100%;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

export const Home = () => {
  const { ref, playState } = useWebAnimation({
    keyframes: {
      transform: ["translateX(500px)"], // Move by 500px
      transform: ["translateX(-100px)"], // Go through three colors
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: 2, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  const [toggle, toggleNav] = useState(false);
  return (
    <div className="Home">
      <div>
        <Nav>
          <Logo>
            <img src={avator} alt="Logo" width="70%" height="85vh" />
          </Logo>
          <Menu>
            <Item>
              <Link target="#" href="https://www.instagram.com/igor_dumencic/">
                Home
              </Link>
            </Item>
            <Item>
              <Link target="#" href="https://www.behance.net/igordumencic">
                Service
              </Link>
            </Item>
            <Item>
              <Link target="#" href="https://github.com/Igor178">
                Contact
              </Link>
            </Item>
          </Menu>
          <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
          </NavIcon>
        </Nav>

        <Overlay open={toggle}>
          <OverlayMenu open={toggle}>
            <Item>
              <Link target="#" href="https://www.instagram.com/igor_dumencic/">
                Home
              </Link>
            </Item>
            <Item>
              <Link target="#" href="https://www.behance.net/igordumencic">
                Service
              </Link>
            </Item>
            <Item>
              <Link target="#" href="https://github.com/Igor178">
                Contact
              </Link>
            </Item>
          </OverlayMenu>
        </Overlay>
      </div>
      <div className="texto">
        <div className="texto1">
          <h1 style={{ fontSize: "3vw" }}>
            We deliver digital products & strategies that help you grow
          </h1>
          <button className="glow-on-hover" type="button">
            Check out our work
          </button>
        </div>

        <div className="HomeSet">
          <img className="set" src={homeSet} alt="G" />
        </div>
      </div>
    </div>
  );
};
