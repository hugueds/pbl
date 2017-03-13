const mongoose = require('mongoose');
const db = 'mongodb://localhost/pbl';

var connection = mongoose.connection;

mongoose.connect(db);

connection
	.on('error', console.error.bind(console, 'connection error:'))
	.once('open', function() {
  		console.log("Connected in " + db)
	});

module.exports = mongoose;
