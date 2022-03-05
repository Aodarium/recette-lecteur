import { Center } from "@mantine/core";
import { Text, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import { BsSearch } from "react-icons/bs";

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
      <div
        style={{
          width: "70%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.map(function (d, idx) {
          return (
            <div
              key={idx}
              onClick={() => {
                setText(d.instruction);
              }}
              style={{
                fontFamily: "Greycliff CF, sans-serif",
                border: "#1c7ed6 2px solid",
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
            >
              <Title order={3}>{d.step}</Title>
              <Text align="left" size="xl" weight={700} color="blue">
                <p>{d.instruction}</p>
              </Text>
            </div>
          );
        })}
      </div>
      <div
        style={{
          padding: 20,
          width: "40%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href="/" passHref>
          <Button
            alt="Nouvelle recette"
            variant="outline"
            color="orange"
            radius="xl"
            size="xl"
            leftIcon={<BsSearch />}
            styles={(theme) => ({
              leftIcon: {
                marginRight: 15,
              },
            })}
          >
            Nouvelle recette
          </Button>
        </Link>
      </div>
    </>
  );
}
