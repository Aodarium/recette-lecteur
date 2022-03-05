import { Center } from "@mantine/core";
import { Card, Image, Text } from "@mantine/core";
import { useState, useEffect } from "react";

export default function Ingredients({ data }) {
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
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map(function (d, idx) {
          return (
            <Card
              onClick={() => {
                setText(d.ingredient);
              }}
              key={idx}
              shadow="sm"
              padding="xl"
              component="a"
              target="_blank"
              style={{
                width: 200,
                height: 200,
                margin: 20,
              }}
            >
              <Card.Section
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={d.image} height={80} width={80} alt="No way!" />
              </Card.Section>

              <Text
                weight={500}
                size="lg"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {d.ingredient}
              </Text>
            </Card>
          );
        })}
      </div>
    </>
  );
}
