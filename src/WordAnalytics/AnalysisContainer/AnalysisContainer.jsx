import { useState } from "react";
import InputAreaContainer from "../InputArea/InputAreaContainer";
import StatisticsContainer from "../Statistics/StatisticsContainer";
import { FACEBOOK_CHAR_LIMIT, INSTAGRAM_CHAR_LIMIT } from "../constants";

const AnalysisContainer = () => {
  const [text, setText] = useState("");
  const totalCharacter = text.length;
  const totalWords = text.split(/\s+/).filter((word) => word !== "");
  const instaCharRemaining = INSTAGRAM_CHAR_LIMIT - totalCharacter;
  const fbCharRemaining = FACEBOOK_CHAR_LIMIT - totalCharacter;
  return (
    <main className="container">
      <InputAreaContainer
        text={text}
        setText={setText}
        instaCharRemaining={instaCharRemaining}
        fbCharRemaining={fbCharRemaining}
      />

      <StatisticsContainer
        totalCharacter={totalCharacter}
        totalWords={totalWords}
        instaCharRemaining={instaCharRemaining}
        fbCharRemaining={fbCharRemaining}
      />
    </main>
  );
};

export default AnalysisContainer;
