import React from "react";

const StatisticsContainer = ({
  totalCharacter,
  totalWords,
  instaCharRemaining,
  fbCharRemaining,
}) => {
  const totalWord = totalWords;
  const statData = [
    {
      title: "Words",
      value: totalWord.length || 0,
    },
    {
      title: "Characters",
      value: totalCharacter || 0,
    },
    {
      title: "Instagram",
      value: instaCharRemaining ?? 270,
    },
    {
      title: "Facebook",
      value: fbCharRemaining ?? 2200,
    },
  ];
  return (
    <section className="stats">
      {statData.map((stat, index) => (
        <Stat key={index} title={stat.title} value={stat.value} />
      ))}
    </section>
  );
};

const Stat = ({ title, value }) => {
  return (
    <section className="stat">
      <span
        className={`stat__number ${value < 0 ? "stat__number--limit" : ""}`}
      >
        {value}
      </span>
      <h1 className="second-heading">{title}</h1>
    </section>
  );
};

export default StatisticsContainer;
