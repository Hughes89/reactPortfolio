const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 1337;

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
