import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
`;

const Info = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Button = styled.button`
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px 20px;
  background: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 400;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-5px);
    border: 1px solid white;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  filter: brightness(0.5);
`;

const HomeSection = () => {
  return (
    <>
      <Container>
        <Img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/53061944_2524312214309950_7419359981532610560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jFRmIcuPibkAX8wX5lU&_nc_ht=scontent-lax3-2.xx&oh=00_AT-bHs0AQnfiCN5bx2VAwxXb1-jYylJGPUA_1icTLPDS5w&oe=621A3300" />
        <Info>
          <NavLink to="/about" activeStyle>
            <Button>Contáctame</Button>
          </NavLink>
        </Info>
      </Container>
      <Container>
        <Img src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.18172-8/20543731_1586010551473459_2041133174688418614_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=k5XcLDc12rkAX8JveRW&_nc_ht=scontent-lax3-2.xx&oh=00_AT_yTzNfxK6rYJ8eQv_-wM_5IMgSttDv1t-ErKHgnAvUHA&oe=6217AB70" />
        <Info>
          <NavLink to="/art" activeStyle>
            <Button>Ver arte</Button>
          </NavLink>
        </Info>
      </Container>
    </>
  );
};

export default HomeSection;
