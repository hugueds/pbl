const Groups = require('../models/Groups');

exports.getGroups = (req, res, next) => {
    Groups.find({}).exec((err, data) => res.json(data));
}

exports.getGroupsByStation = (req, res, next) => {
    const { stationId } = req.params;
    Groups.find({ stationId: stationId }).exec((err, data) => res.json(data));
}

exports.createGroup = (req, res, next) => {
    Groups.find({}).exec((err, groups) => {        
        const groupIds = groups.length ? groups.map(g => g._id) : null;        
        const _id = groupIds ? Math.max.apply(null, groupIds) + 1 : 0;
        const newGroup = new Groups({ _id });
        newGroup.save();
        console.log(`Group ${_id} created`);
        res.send().status(200);
    });
}

exports.deleteGroup = (req, res, next) => {
    const { groupId } = req.params;
    Groups.remove({ _id : groupId }).exec((err) => {
        if (!err) {            
            console.log(`Group ${groupId} removed`);
            res.sendStatus(200);
        } else {
            next();
        }
    })
}

exports.addStation = (req, res, next) => {
    const { _id, station } = req.body;
    Groups.findOne({ _id }, (err, doc) => {
        const stations = [...doc.station];        
        if (stations.includes(station)) {
            console.log(`Station ${station} already included`);
            res.sendStatus(404);
        } else {
            doc.station = [...stations, station];
            doc.save();
            console.log(`Station ${station} saved to group ${_id}`);
            res.sendStatus(200);
        }
    });
}

exports.removeStation = (req, res, next) => {
    const { _id, station } = req.body;    
    Groups.findOne({ _id }, (err, doc) => {
        const stations = [...doc.station];        
        if (!stations.includes(station)) {
            console.log(`Station ${station} not registered`);
            res.sendStatus(404);
        } else {
            const newStations = stations.filter(s => s !== station);
            doc.station = [...newStations]
            doc.save();
            console.log(`Station ${station} delete from group ${_id}`);
            res.sendStatus(200);
        }
    });
}