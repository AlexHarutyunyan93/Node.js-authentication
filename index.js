const express      = require("express");
const mongoose     = require('mongoose');
const bodyParser   = require('body-parser');
const cors         = require('cors');
const corsOptions  = require("./helpers/corsOptions");
const jwt          = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

const app = express();


mongoose.connect('mongodb://localhost/nodejsauth', { useUnifiedTopology: true });


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(jwt());

//app.use('/api', require('./routes/route'));
app.use('/users', require('./users/users.controller'));
app.use(errorHandler);

app.listen(7070, () => {
    console.log("server is on port 7070");
});