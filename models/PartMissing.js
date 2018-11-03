const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartMissingSchema = new Schema({
	stationId: Number,
	part : String, 
	buffer : String, 
	module : String, 
	date: { type: Date, default: new Date() }
},	{ collection : 'partmissing'});


module.exports = mongoose.model('PartMissing', PartMissingSchema);