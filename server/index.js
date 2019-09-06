const axios = require("axios");
const CircularJSON = require('circular-json');
const fs = require("fs");


// const APP_ID = '39bd6e33'
// const APP_KEY = '8df8d8247d62081c03a203cfef8c7ffc'

// other guys keys
const APP_ID = 'eb223bb5'
const APP_KEY = 'a2fa4489c73af81ce3ac80a35b5dafe9'

const QUERY = 'pork'
const append = '&to=100'
const healthLabel = '&health=alcohol-free&health=sugar-conscious'
// const dishType = '&dishType=main-course&dishType=salad&dishType=sandwich&dishType=side-dish&dishType=starter'
const dishType = '&dishType=main-course&dishType=side-dish&dishType=starter'
// const mealType = '&mealType=breakfast&mealType=lunch&mealType=dinner&mealType=snack'

const endpoint = `https://api.edamam.com/search?q=${QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}`
axios(endpoint + healthLabel + append)
  .then(response => storeData(response.data));

  // axios('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
  // .then(r=>storeData(r))

const storeData = (data, path) => {
  try {
    fs.writeFileSync("pork.json", CircularJSON.stringify(data));
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
