const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));
app.use('/css', express.static('public/assets'));
app.use('/js', express.static('public/assets'));
  
// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);
app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
