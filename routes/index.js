const express = require('express');
const router = express.Router();
const colors = require('colors');
const partApi = require('../api/partMissing');

const path = require('path');

const { groups } = require('../data/config');
//const io = require('socket.io');

const groupApi = require('../api/groups');

router.route('/cel/:cel/parts')
    .get(partApi.getMissing)
    .post(partApi.postMissing);

router.route('/cel/:cel/parts/:partid')
    .get(partApi.partInfo)
    .delete(partApi.deleteMissing);

router.get('/api/parts/:stationId', (req, res) => {
    const {stationId} = req.param;
    groups.find(x => x.stations.contains(stationId));    
});

router.get('/api/parts/:buffer', partApi.getByBuffer);

router.get('/api/groups', groupApi.getGroups);
router.get('/api/groups/create', groupApi.createGroup);

router.get('/api/groups/:groupId', partApi.getByGroupId);
router.delete('/api/groups/:groupId', groupApi.deleteGroup);

router.post('/api/station/', groupApi.addStation);
router.delete('/api/station/', groupApi.removeStation);

router.route('*')
    .get((req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));


module.exports = router;