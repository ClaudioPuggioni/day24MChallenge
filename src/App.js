import React from "react";
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";
import styled from "styled-components";

const OuterContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  let contentObj = {
    title: "List of articles",
    articles: [
      { title: "Article 01", content: "The worst part of having a mental illness is that people expect you to behave as if you don't." },
      { title: "Article 02", content: "No brain at all, some of them, only grey fluff that’s blown into their heads by mistake, and they don’t think." },
      { title: "Article 03", content: "What do you get when you cross a mentally ill loner with a society that abandons him and treats him like trash? You get what you fuckin’ deserve!" },
      { title: "Article 04", content: "I think we dream so we don’t have to be apart for so long. If we’re in each other’s dreams, we can be together all the time." },
      { title: "Article 05", content: "Comedy is subjective, Murray, isn't that what they say? All of you,this system that we know so much, you decide what's right or wrong, the same way that you decide what's funny or not." },
      { title: "Article 06", content: "If the person you are talking to doesn’t appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear." },
      { title: "Article 07", content: "Friendship is everything. Friendship is more than talent. It is more than the government. It is almost the equal of family." },
      { title: "Article 08", content: "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you." },
      { title: "Article 09", content: "I’m dishonest, and a dishonest man you can always trust to be dishonest. Honestly, it’s the honest ones you want to watch out for, because you can never predict when they’re going to do something incredibly stupid." },
      { title: "Article 10", content: "If the person you are talking to doesn’t appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear." },
    ],
  };

  return (
    <OuterContainer>
      <NavBar />
      <CardList contentObject={contentObj} />
    </OuterContainer>
  );
}

export default App;
