const express = require('express')
 ,router = express.Router()
 ,colors = require('colors')
 ,io = require('socket.io');
;
var parts = require('../routes/routes');

router.route('/')
	.get((req, res) => {
		res.render('index');
	})
;

router.route('/cel/:cel/parts')
	.get(parts.getMissing)
	.post(parts.postMissing)
;

router.route('/cel/:cel/parts/:partid')
	.get(parts.partInfo)
	.delete(parts.deleteMissing)	

;


module.exports = router;