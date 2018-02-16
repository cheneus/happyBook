const router = require("express").Router();
const axios = require("axios")

// const booksController = require("../../controllers/booksController");
console.log("search is running")
// Matches with "/api/books"
router.route("/")

  .post((req, res) => { 
    var result = []
    console.log(req.params)
    console.log(req.body)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.query}`)
    .then((response) => {
      // console.log(response.data.items)

      // for (var i = 0; i < response.data.items.length; i++) {
      //   var item = response.data.items[i];
      //   result.push(item)
      //   // in production code, item.text should have the HTML entities escaped.
      //   // document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
      // }
      console.log("SUCCESS")
      console.log(response.data.items.length)
      res.json(response.data.items)
    })
    .catch((err => {
      console.log("THIS IS AN ERROR")
      res.json(err)
    }))
  })
    
  

module.exports = router;
