import React from "react";
import Title from "./Title";
import Card from "./Card";
import styled from "styled-components";

const TitleStyle = styled.div`
  text-align: center;
`;
const CardContainerStyle = styled.div`
  max-width: 1390px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CardContainerBodyStyle = styled.div`
  height: 95vh;
  max-width: 1390px;
  margin: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = (props) => {
  return (
    <>
      <CardContainerStyle>
        <TitleStyle>
          <Title titleText={props.contentObject.title} />
        </TitleStyle>
        <CardContainerBodyStyle>
          {props.contentObject.articles.map((ele, idx) => {
            return <Card title={ele.title} content={ele.content} index={idx} />;
          })}
        </CardContainerBodyStyle>
      </CardContainerStyle>
    </>
  );
};

export default CardList;
