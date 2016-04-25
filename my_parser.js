// filesystem module

var fs =require('fs');

// read the a file

fs.readFile('example_log.txt', function(err, logData){

	// display the error if it ocurs
	if (err) throw err;

	// logData is a buffer, convert it to a script
	var text = logData.toString();
	console.log(text, "heres text");

	var results = {};
     // split text into lines
	var lines = text.split('\n');

	lines.forEach(function(line){
		// split by space gves 3 parts
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if(!results[letter]) {
			results[letter] = 0;
		}

		results[letter] += parseInt(count);
	});

	console.log(results);

});