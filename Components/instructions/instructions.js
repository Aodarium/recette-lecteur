import { Center } from "@mantine/core";
import { Text, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import { BsSearch } from "react-icons/bs";

export default function Instructions({ data }) {
  const [text, setText] = useState("");
  const [colour, setColour] = useState("#1c7ed6");
  const [active, setActive] = useState(-1);
  const [visited, setVisited] = useState([]);

  function sayHello(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    console.log(this);
    speechSynthesis.speak(utterance);

    utterance.addEventListener("end", function (event) {
      setActive(-1);
    });
  }

  function inVisited(elt) {
    return visited.includes(elt);
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
                console.log(idx);
                setText(d.instruction);
                setActive(idx);
                setVisited(visited.concat(idx));
              }}
              style={{
                fontFamily: "Greycliff CF, sans-serif",
                border: `${
                  active === idx ? "#F5B611 5px" : "#1c7ed6 2px"
                }  solid`,
                background: `${inVisited(idx) ? "#DEF0F2" : ""}`,
                borderRadius: 10,
                padding: 10,
                margin: 10,
                cursor: "pointer",
              }}
            >
              <Title order={3}>{d.step}</Title>
              <Text
                align="left"
                size="xl"
                weight={700}
                color={inVisited(idx) ? "dimmed" : "blue"}
              >
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
