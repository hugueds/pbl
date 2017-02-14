'use strict';

var PartMissing = require('../models/PartMissing');

exports.getMissing = (req, res, next) => {
	PartMissing.find({})
	.exec((err, data) => {
		res.status(200).json(data);
	});
}

exports.postMissing = (req, res, next) => {
	PartMissing.find({})
	.exec((err, data) => {
		res.status(200).json(data);
	});
}

exports.partInfo = (req, res, next) => {
	var id = req.params.partid
	PartMissing.find({_id : id})
	.exec((err, data) => {
		res.status(200).json(data);
	});
}

exports.deleteMissing = (req, res, next) => {
	var id = req.params.partid;
	PartMissing.remove({_id : id})
	.exec((err, data) => {
		res.status(200).json({message : 'LT REMOVIDA', id: id});
	});
}
