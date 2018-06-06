const axios = require("axios");
let nomsArr = [];

module.exports = {
  getRestaurants: (req, res) => {
    if (!nomsArr.length) {
      axios
        .get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
        .then(foods => {
          nomsArr = foods.data.restaurants;
          res.status(200).json(nomsArr);
        })
        .catch(err => res.status(500).json(err));
    } else {
      res.status(200).json(nomsArr);
    }
  },
  getRestaurantInfo: (req, res) => {
    const { name } = req.params;
    let index = nomsArr.findIndex(location => location.name === name);
    let filteredNoms = nomsArr.filter((e, i) => i === index);
    res.status(200).json(filteredNoms);
  }
};
