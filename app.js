// /**
//  * Required External Modules
//  */

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const CLIENT_BUILD_PATH = path.join(__dirname, '../contact');
// console.log(CLIENT_BUILD_PATH)
// //var router = require('express').Router();
// /**
//  * App Variables
//  */

// const app = express();
// const port = process.env.PORT || "3333";

// //adding middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());


// /**
//  * Routes Definitions
//  */

// const appRouter = require('./routes/index');
//  app.use('/api', appRouter);
//  app.use(express.static(CLIENT_BUILD_PATH));

//  app.get('/', (req, res) => {
//     res.render('index');
// });

// /**
//  *  App Configuration
//  */

//  app.set("views", path.join(__dirname, "views"));
//  app.set("view engine", "ejs");



// /**
//  * Server Activation
//  */
// app.listen(port, () => {
//     console.log(`server listening on port http://localhost:${port}`);
// })



  
const express = require("express");
const app = express();
// const { Client } = require('pg')
// const client = new Client({
//     connectionString: "postgres://xducephjlnjuon:8da6c1fb84f2d71f541f4fc80c5409bc97503742d631df371b52761422b5efa6@ec2-107-21-10-179.compute-1.amazonaws.com:5432/d5v88rtqervvkb",
//     ssl: {
//         rejectUnauthorized: false
//     }
// })
// client.connect();

app.set('view engine', 'ejs');

app.get("*", (req, res) => {
    // res.json({ text: "Hello salesforce" })

    // client.query('SELECT * FROM salesforce.contact', (err, result) => {
    //     //console.log(err ? err.stack : res.rows[0].message) // Hello World!
    //     // client.end()
    //     //res.json(result.rows);
        res.render('index', {
            contacts: [{name:'sri'}]
        });
    // })
})

app.listen(process.env.PORT || 4444, () => {
    console.log(`listening at ${process.env.PORT || 4444}`)
})