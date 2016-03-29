"USE STRICT";
app.factory("dbService", function($http){
	var sqlite = require('sqlite-sync');
	var db = sqlite.connect('model/database.db');
	return db;
});