const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const connectToDatabase = require('./Database')

const bodyparser = require("body-parser");



// Connect to the MongoDB database
connectToDatabase()


// handle cors

app.use(cors({
  allowedHeaders: '*'
}))


// Body-parser

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Handle calls
app.use(morgan('dev'))


// handle routers

app.use('/',require('./Imega/Router/Router.Request'))








// Start the server
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
