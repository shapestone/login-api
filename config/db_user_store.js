var databaseURI = "localhost:27017/user_store";
var collections = ["users","user_address"];
var db = require("mongojs").connect(databaseURI, collections);
module.exports = db;