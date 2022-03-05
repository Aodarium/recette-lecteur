import Head from "next/head";
import { Center, Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import Router from "next/router";

export default function Home() {
  const form = useForm({
    initialValues: {
      url: "",
    },

    validationRules: {
      url: (value) =>
        /^https\:\/\/www\.marmiton\.org\/recettes\/.*\.aspx$/.test(value),
    },
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Head>
          <title>Mon lecteur de recette</title>
          <meta name="description" content="lecteur de recettes" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            Router.push("/recette/?url=" + values.url);
          })}
        >
          <Center
            style={{
              width: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <TextInput
              placeholder="Lien"
              label="Copie le lien de la recette ici"
              radius="xl"
              size="xl"
              required
              style={{
                marginTop: "50%",
              }}
              {...form.getInputProps("url")}
            />
            <Button
              type="submit"
              style={{
                marginTop: 20,
              }}
              variant="outline"
              color="orange"
              radius="xl"
              size="xl"
            >
              Obtenir
            </Button>
          </Center>
        </form>
      </div>
    </>
  );
}
