import React from "react";
import styled from "styled-components";

let CardOutlineStyle = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
`;
let CardStyle = styled.div`
  position: relative;
  height: 300px;
  width: 250px;
  margin: 10px;
  perspective: 1000px;

  &:hover ${CardOutlineStyle} {
    transform: rotateY(180deg);
  }
`;
let FrontBackStyles = `
position: absolute;
height: 100%;
width: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
`;
let CardTitleContentStyles = `
text-align: center;
margin: 15px;
padding: 0px 5px;
`;

let FrontSideTXTStyle = styled.div`
  ${FrontBackStyles}
  color: white;
  background-color: #c4b2a9;
`;
let BackSideIMGStyle = styled.img`
  ${FrontBackStyles}
  transform: rotateY(180deg);
`;

let CardTitleStyle = styled.div`
  ${CardTitleContentStyles}
  margin: 25px 15px;
  font-size: 22px;
  font-weight: 700;
`;
let CardContentStyle = styled.div`
  ${CardTitleContentStyles}
  font-size: 13px;
  font-weight: 500;
`;

const Card = ({ title, content, index }) => {
  return (
    <CardStyle>
      <CardOutlineStyle>
        <FrontSideTXTStyle>
          <CardTitleStyle>{title}</CardTitleStyle>
          <CardContentStyle>{content}</CardContentStyle>
        </FrontSideTXTStyle>
        <BackSideIMGStyle src={`/assets/${index + 1}.png`} alt={`Article ${index + 1}`} />
      </CardOutlineStyle>
    </CardStyle>
  );
};

export default Card;
