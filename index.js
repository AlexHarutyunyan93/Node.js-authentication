const express     = require("express");
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const corsOptions = require("./helpers/corsOptions");

const app = express();

mongoose.connect('mongodb://localhost/nodejsauth', { useUnifiedTopology: true });


app.use(express.static('./public'));
app.use(bodyParser.json());

app.use('/api', require('./routes/route'));


app.listen(7070, () => {
    console.log("server is on port 7070");
});