const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = require('./../exampleresponse.json');

// GET "/"
app.get("/", (req, res) => {
  res.send(videos);
});

// POST "/"
app.post("/", (req, res) => {
  const { title, url } = req.body;
  const newVideo = {
    id: 1,
    title: { title },
    url: {url}
  }
  res.send(videos);
});
