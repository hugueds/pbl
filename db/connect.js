const mongoose = require('mongoose');
const db = 'mongodb://localhost/pbl';

mongoose.Promise = global.Promise;
mongoose.connect(db);

const connection = mongoose.connection;

connection
	.on('error', console.error.bind(console, 'connection error:'))
	.once('open', function() {
  		console.log("Connected in " + db)
	});

module.exports = mongoose;
