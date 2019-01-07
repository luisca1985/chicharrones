// Invocar el modo 'strict' de JavaScript
'use strict';

const express = require('express');
const router = express.Router();
var users = require('../controllers/users.server.controller');

router.get('/', (req, res) => {
    res.json({
        'status':'Api Works'
    });
});

module.exports = router;