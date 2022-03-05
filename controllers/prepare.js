const cheerio = require("cheerio");
const axios = require("axios");

async function getReceipe(URL) {
  const { data } = await axios.get(URL);

  return cheerio.load(data);
}

async function getTitle($) {
  const title = $(".itJBWW");
  let lastIng = "";
  title.each(function () {
    let title = $(this).text();
    if (lastIng !== title) {
      lastIng = title;
    }
  });
  return lastIng;
}

async function getIngredient($) {
  let ingredientList = [];
  const listItems = $(".MuiGrid-root > div");

  let lastIng = "";
  listItems.each(function () {
    let title = $(this).text();
    let image = $(this).find("img").attr().src;
    const product = {
      ingredient: title,
      image: image,
    };
    if (lastIng !== title) {
      ingredientList.push(product);
      lastIng = title;
    }
  });

  return ingredientList;
}

async function getStep($) {
  let stepList = [];
  const listStep = $(".SHRD__sc-juz8gd-3 > ul > li > p");

  listStep.each(function (currentValue) {
    let instruction = $(this).text();
    const step = {
      step: `Etape ${currentValue + 1}`,
      instruction: instruction,
    };
    stepList.push(step);
  });
  return stepList;
}

module.exports = async (URL) => {
  let $ = await getReceipe(URL);

  let title = await getTitle($);
  console.log("title", title);
  let ingredientList = await getIngredient($);
  let steps = await getStep($);
  return { title, ingredientList, steps };
};
