const express      = require("express");
const bodyParser   = require('body-parser');
const cors         = require('cors');
const corsOptions  = require("./helpers/corsOptions");
const jwt          = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(jwt());

app.use('/auth', require('./controllers/auth.controllers'));
app.use('/users', require('./controllers/user.controllers'));

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 7070;

const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
