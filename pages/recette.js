import Head from "next/head";
import styles from "../styles/Home.module.css";
import Ingredients from "../Components/ingredients/ingredient";
import Instructions from "../Components/instructions/instructions";
import Title from "../Components/title/title";

export default function Home({ title, ingredientList, steps }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Mon lecteur de recette</title>
          <meta name="description" content="lecteur de recettes" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Title data={title} />
        <Ingredients data={ingredientList} />
        <Instructions data={steps} />
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const URL = ctx.query?.url || null;
  const preparePage = require("../controllers/prepare");
  const { title, ingredientList, steps } = await preparePage(URL);

  return {
    props: {
      title,
      ingredientList,
      steps,
    },
  };
}
