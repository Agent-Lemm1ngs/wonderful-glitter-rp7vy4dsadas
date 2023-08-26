const express = require("express")
const path = require('path');

const app = express()
app.use(express.static('src'));

const port = 4999

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})