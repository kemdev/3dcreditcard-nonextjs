const cardData = require('../../data/data.json')

//console.log(meals);

exports.handleListMeals = (req, res) => {

    res.send(cardData)
    // res.send('Hello from list')
}