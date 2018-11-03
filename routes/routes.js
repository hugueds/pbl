const PartMissing = require('../models/PartMissing');

exports.getMissing = (req, res, next) => {
	PartMissing.find({})
	.exec((err, data) => {
		res.status(200).json(data);
	});
}

exports.postMissing = (req, res, next) => {
	let part = new PartMissing(req.body);	
	part.save();
	res.status(201).json(part);
}

exports.partInfo = (req, res, next) => {
	let id = req.params.partid
	PartMissing.find({_id : id})
	.exec((err, data) => {
		res.status(200).json(data);
	});
}

exports.deleteMissing = (req, res, next) => {
	var id = req.params.partid;
	PartMissing.remove({_id : id})
	.exec((err, data) => {
		console.log('Removendo peca: ', JSON.stringify(data))		
		res.status(200).json({message : 'LT REMOVIDA', id: id});
	});
}
