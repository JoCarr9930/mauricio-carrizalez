import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
  color: white;
  position: absolute;
  z-index: 1;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 2.3rem;
  letter-spacing: 3px;
  color: white;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  filter: brightness(0.6);
`;

const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <Info>
        <Title>Sobre Mí</Title>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          corporis laboriosam accusantium atque quia excepturi recusandae!
          Quibusdam laborum veniam totam veritatis nesciunt perferendis quia
          commodi tenetur. Nisi consequatur ut sed non, cumque fugit at
          adipisci, ducimus cupiditate recusandae officia rem in sit nostrum ad
          nam. Perspiciatis perferendis incidunt veniam suscipit!
        </Description>
      </Info>
      <ImgContainer>
        <Image src={require("../Photos/Gallery/one.jpg")} />
      </ImgContainer>
    </AboutContainer>
  );
};

export default AboutSection;
