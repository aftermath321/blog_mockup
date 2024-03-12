import React from "react";
import {
  Books,
  Child,
  Girl,
  Elephants,
  Fern,
  Flower,
  Street,
  Dunes,
} from "../assets/imports";
import Card from "./card";

const MainGrid = () => {
  return (
    <main>
      <div className="mainGrid">
        <Card
          image={Books}
          alt="books"
          h1="Best books of the 2022"
          p="Here's my take on the best books published in the past
                year!"
          author="Michal K"
          priority={true}
        />
        <Card
          image={Girl}
          alt="girl"
          h1="Story of the past"
          p="Short and funny story that happened to me in the year 2000."
          author="Michal K"
        />
        <Card
          image={Dunes}
          alt="dunes"
          h1="Summer in Denmark"
          p="The best way to spend a summer in Denmark?"
          author="Michal K"
        />
        <Card
          image={Elephants}
          alt="elephants"
          h1="Elephants need your help!"
          p="The fundraiser for elephant's safe haven."
          author="Michal K"
        />
        <Card
          image={Fern}
          alt="fern"
          h1="How to find the motivation?"
          p="Few simple tips how to find motivation for studying, even on the
              bluest day of the year."
          author="Michal K"
        />
        <Card
          image={Street}
          alt="street"
          h1="Dream destination"
          p="Photography of Kyoto"
          author="Michal K"
        />
        <Card
          image={Child}
          alt="child"
          h1="Across the South East Asia"
          p="My first visit to SEA region and how it went."
          author="Michal K"
        />
        <Card
          image={Flower}
          alt="flower"
          h1="What are my plants for May of 2022?"
          p="Can you guess the next destination?"
          author="Michal K"
        />
      </div>
    </main>
  );
};

export default MainGrid;
