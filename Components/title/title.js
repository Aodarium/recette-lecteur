import { Center } from "@mantine/core";
import { Text, Title } from "@mantine/core";
import { useState, useEffect } from "react";

export default function Instructions({ data }) {
  const [text, setText] = useState("");

  function sayHello(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    console.log(this);
    speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    function display() {
      sayHello(text);
      setText("");
    }
    display();
  });

  return (
    <>
      <Title
        order={1}
        align="center"
        size="xl"
        weight={700}
        color="blue"
        onClick={() => {
          setText(data);
        }}
      >
        {data}
      </Title>
    </>
  );
}
