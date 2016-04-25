var express= require('express');
var path = require('path');
app = express();

// set port to run on
app.set('port', 3001);


app.use(express.static(__dirname + '/public'));
// listen for requests
var server = app.listen(app.get('port'), function(){

	var port = server.address().port;
	console.log("Magic happnening on port " + port);
});
