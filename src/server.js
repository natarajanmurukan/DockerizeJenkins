'use strict';
const helpers = require('handlebars-helpers')();
var server = require('express')();

require('./config/security')(server);
require('./config/handlebars')(server);
require('./config/bodyparser')(server);
require('./routes/routes')(server);

server.listen(process.env.PORT ? process.env.PORT : 3000,'0.0.0.0', function () {
    console.log("NodeJS Rest API Listening on port ::  " + (process.env.PORT ? process.env.PORT : 3000));
});
