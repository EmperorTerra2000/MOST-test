const express = require('express');
const cors = require("cors");
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3100;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/import', (req, res) => {
  res.header("Content-Type", 'application/json');
  let fileContent = fs.readFileSync("./test.json", "utf8");

  res.send(fileContent);
})

app.post(
  '/export',
  (req, res) => {
    console.log(req.body);
    fs.writeFile('./test.json', JSON.stringify(req.body), err => {
      if (err) console.log('Error');
    })
  }
);





















// custom 404 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))
