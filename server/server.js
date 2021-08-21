const express = require("express");
const _ = require('lodash');
const cors = require('cors');
const { Pool } = require('pg')

const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
    user: 'douglas',
    host: 'localhost',
    database: 'videos',
    password: 'PeanutbutteR2020%',
    port: 5432
});

// To check whether the connection is succeed for Failed while running the project in console.
pool.connect((err) => {
  if (!err) {
    console.log("Db Connection Succeed");
  }
  else {
    console.log("Db connect Failed \n Error :" + JSON.stringify(err, undefined, 2));
  }
});

  // GET "/"
app.get("/", (req, res) => {
  pool
    .query('SELECT * FROM videos')
    .then((result) => res.json(result.rows))
    .catch((event) => console.error(event));
  });

// import uniqueId from 'lodash/uniqueId';
// todos.forEach((todo) => {
//   todo.uniqueKey = uniqueId();
// });
// todos.forEach((todo) => {
//   todo.uniqueKey && delete todo.uniqueKey;
// });

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
  pool
    .query(`SELECT * FROM videos WHERE title=${title}`)
    .then((result) => {
      if (result.rows.length > 0) {
        return res
          .status(400)
          .send("A Video with the same name already exists!");
      } else {
        const query =
          `INSERT INTO videos (id, title, url) VALUES (${newId},${title},${url})`;
        pool
          .query(query)
          .then(() => res.send("Video created!"))
          .catch((event) => console.error(event));
      }
    });
});

// GET by ID
app.get('/:id', (req, res) => {
  const { id } = req.params;
  const idExist = videos.some(video => video.id === parseInt(id));
  
  if (idExist) {
    const idFound = videos.filter(video => video.id === parseInt(id));
    res.json(idFound);
  } else {
    res.status(404).json({ msg: `No video with the id of ${id}` });
  }
});

// DELETE by ID
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteId = videos.some(video => video.id === parseInt(id));
  
  if (deleteId) {
    const deletedVideos = videos.filter(
      video => video.id !== parseInt(id)
      );
      videos = deletedVideos;
      res.json({ msg: `Video id: ${id} deleted!` });
    } else {
      res.status(404).json({ msg: `No video with the id of ${id}` });
    }
  });
  
  