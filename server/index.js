const axios = require("axios");
const CircularJSON = require('circular-json');
const fs = require("fs");

const APP_ID = '39bd6e33'
const APP_KEY = '8df8d8247d62081c03a203cfef8c7ffc'
const QUERY = ''
const append = '&from=0&to=100'
const healthLabel = '&health=alcohol-free'
const dishType = '&dishType=main-course&dishType=salad&dishType=sandwich&dishType=side-dish&dishType=starter'
// const mealType = '&mealType=breakfast&mealType=lunch&mealType=dinner&mealType=snack'

const endpoint = `https://api.edamam.com/search?q=${QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}`
axios(endpoint + healthLabel + dishType + append)
  .then(response => storeData(response.data));

  // axios('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
  // .then(r=>storeData(r))

const storeData = (data, path) => {
  try {
    fs.writeFileSync("vegetarian1raw.json", CircularJSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

const loadData = (path) => {
  try {
    return fs.readFileSync(path, 'utf8')
  } catch (err) {
    console.error(err)
    return false
  }
}

const appendFile = (content, path) => {
  fs.appendFile("file.log", content, err => {
    if (err) {
      console.error(err);
      return;
    }
    //done!
  });
};
