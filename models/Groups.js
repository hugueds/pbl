const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    _id: Number,
    station: [Number]
}, { collection : 'group'});

module.exports = mongoose.model('Group', GroupSchema);