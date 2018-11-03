const PartMissing = require('../models/PartMissing');
const Group = require('../models/Groups');

exports.getMissing = (req, res, next) => {
    PartMissing.find({})
        .exec((err, data) => {
            res.status(200).json(data);
        });
}

exports.postMissing = (req, res, next) => {
    const part = new PartMissing(req.body);
    part.save();
    res.status(201).json(part);
}

exports.partInfo = (req, res, next) => {
    const id = req.params.partId
    PartMissing.find({ _id: id })
        .exec((err, data) => {
            res.status(200).json(data);
        });
}

exports.deleteMissing = (req, res, next) => {
    const id = req.params.partid;
    PartMissing.remove({ _id: id })
        .exec((err, data) => {
            console.log('Removendo peca: ', JSON.stringify(data))
            res.status(200).json({ message: 'LT REMOVIDA', id: id });
        });
}

exports.getByStationId = (req, res, next) => {
    const { stationId } = req.params;
    PartMissing.find({ stationId }).exec((err, data) => res.json(data));
}

exports.getByGroupId_V1 = (req, res, next) => {
    const { groupId } = req.params;
    Group.findOne({ _id: groupId }, (err, group) => {
        const stations = [...group.station];
        PartMissing.find({ stationId: { $in: stations } }, (err, data) => {
            res.json(data);
        });
    });
}

exports.getByGroupId = (req, res, next) => {
    const { groupId } = req.params;
    Group.findOne({ _id: groupId }, (err, group) => {
        const stations = [...group.station];
        PartMissing.find({ buffer: { $in: stations } }, (err, data) => {
            res.json(data);
        });
    });
}

exports.getByBuffer = (req, res, next) => {
    const { buffer } = req.params;
    PartMissing.find({ buffer }, (err, parts) => {
        res.json(parts);
    });
}