/* NODE MODULES */
const path = require('path');
const http = require('http');
const express = require('express');

/* IMPORTS */


/* GLOBAL VARIABLES */
const publicPath = path.join(__dirname, '..', '/public');
const scriptPath = path.join(__dirname, '..', 'node_modules');
let publicRouter = express.Router();
let scriptRouter = express.Router();
publicRouter.use(express.static(publicPath));
scriptRouter.use(express.static(scriptPath));
const port = process.env.PORT || 3000;

/* SERVER CONFIG */
let app = express();
let server = http.createServer(app);

app.use('/', publicRouter);
app.use('/scripts', scriptRouter);

/* SET PORT LISTENER */
server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});