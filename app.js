/**
 * Required External Modules
 */

const express = require('express');
const path = require('path');
bodyParser = require('body-parser');
cors = require('cors');
const CLIENT_BUILD_PATH = path.join(__dirname, '../express');
var router = require('express').Router();
/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "3333";

//adding middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


/**
 * Routes Definitions
 */
const appRouter = require('./routes/index');
 app.use('/api', appRouter);
 app.use(express.static(CLIENT_BUILD_PATH));
 app.get('*', (request, response) => {
    response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

/**
 *  App Configuration
 */

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "ejs");
 app.use(express.static(path.join(__dirname, "public")));

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
})