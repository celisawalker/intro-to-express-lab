const express = require("express");
//const morgan = require("morgan");

const app = express();

app.get('/greetings/:name', (req, res) => {
    res.send(`It's great to see you again, ${req.params.name}!`)
})

app.get('/roll/:number', (req, res) => {
    let number = parseInt(req.params.number)

    if(isNaN(number)){
        res.send("You must specify a number")
    }else{
        res.send(`You rolled a ${number}`)
    }
});


app.listen(3000, () => {
    console.log("listening on port 3000");
});

app.get("/collectibles/:index", (req, res) => {

    const index = req.params.index

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];

      
      for(let i = 0; i < collectibles.length; i++){
        if(index > collectibles.length){
            res.send(`This item is not yet in stock. Check back soon!`)
        }else{
            //console.log(collectibles[i].name)
            return res.send(`So, you want the ${collectibles[i].name}? For $${collectibles[i].price}, it can be yours!`)
        }
      }
})



app.get("/shoes", (req, res) => {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const type = req.query.type;

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
  
    //console.log(req.query.minPrice)  

    if(req.query.minPrice){
        const filteredShoes = shoes.filter(shoe => shoe.price < minPrice)
        res.send(filteredShoes)
    }else if(req.query.maxPrice){
        const filteredShoes = shoes.filter(shoe => shoe.price > maxPrice)
        res.send(filteredShoes)
    }else if(req.query.type){
        const filteredShoes = shoes.filter(shoe => shoe.type === type)
        res.send(filteredShoes);
    }else{
        res.send(shoes)
    }
})
