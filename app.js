var http = require('http'),
    express = require('express'),
    cons = require('consolidate'),
    fs = require("fs");

var app = module.exports = express();

// maxSockets greater ethan 10 sockets
http.globalAgent.maxSockets = 1200;

var port = 5001;

// Configuration
app.configure(function () {
    app.use(express.bodyParser({
        keepExtensions: true,
        limit: 10000000, // 10M bytes limit
        defer: true
    }));
    app.use(express.methodOverride());
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

// Bootstrap controllers
var controllers_path = __dirname + '/rest/controllers'
    , controller_files = fs.readdirSync(controllers_path);

controller_files.forEach(function (file) {
    console.log('reading file' + file);
    require(controllers_path + '/' + file)(app)
});

app.listen(port, function () {
    console.log("Node server is running on port %d in %s mode", port, app.settings.env);
});
