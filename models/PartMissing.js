var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartMissingSchema = new Schema({
	part : String, 
	buffer : String, 
	module : String, 
	date: { type: Date, default: new Date() }
},	{ collection : 'partmissing'});


module.exports = mongoose.model('PartMissing', PartMissingSchema);