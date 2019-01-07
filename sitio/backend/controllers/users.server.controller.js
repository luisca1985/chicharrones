// Invocar el modo 'strict'
'use strict';

const userCtrl = {};

userCtrl.getUsers = (req, res) => {
	res.json({
        'status':'Api Works'
    });
};

module.exports = userCtrl;