const express = require('express');
const router = express.Router();
const colors = require('colors');
//const io = require('socket.io');

const parts = require('../routes/routes');

router.route('/')
    .get((req, res) => {
        res.render('index');
    });

router.route('/cel/:cel/parts')
    .get(parts.getMissing)
    .post(parts.postMissing);

router.route('/cel/:cel/parts/:partid')
    .get(parts.partInfo)
    .delete(parts.deleteMissing)

;


module.exports = router;