const express = require("express");
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

  // ID for New Video
  const orderedIdVideos = _.orderBy(videos, ['id'], ['desc']); // 'asc'
  const latestIdVideo = orderedIdVideos[0];
  // Just need to check if order videos has a item in the array
  const newId = latestIdVideo.id + 1;

  const newVideo = {
    id: newId,
    title: title,
    url: url
  }

  // Checking if any property of the Video object is missing or empty.
  if (!newVideo.title) {
    res.status(400).json({ msg: `Please include a title` });
  } if (!newVideo.url) {
    res.status(400).json({ msg: `Please include a valid url` });
  } else {
    videos.push(newVideo);
    res.json(videos);
  }
});
