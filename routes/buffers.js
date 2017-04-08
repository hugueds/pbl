const express = require('express');
const router = express.Router();

var message = "Por favor, selecione um buffer";

router.get('/', (req, res, next) => {
    res.render('buffer', { message: message });
});

router.get('/:buffer/', (req, res, next) => {
    res.render('buffer', { buffer: req.params.buffer });
});








module.exports = router;