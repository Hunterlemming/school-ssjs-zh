const express = require('express');
const path = require('path');
const pilotsRouter = require('./routes/pilots.router');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.use('/', pilotsRouter);

// for public, and css
app.use(express.static(path.join(__dirname, 'public'), {index: false, extensions: ['html']}));

app.listen(3000, () => console.log('listening on port 3000'));
