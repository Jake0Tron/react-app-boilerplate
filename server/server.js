const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) => {
  res.send('Hello World! From ExpressJS');
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});