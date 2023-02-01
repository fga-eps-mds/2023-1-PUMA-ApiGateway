const express = require('express');
const classController = require('../controller/classController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/', (req, res) => {
    classController.getClasses().then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.get('/:classid', (req, res) => {
    classController.getClass(parseInt(req.params.classid, 10)).then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.put('/:classid', (req, res) => {
    classController.updateClass(parseInt(req.params.classid, 10), req.body).then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

router.delete('/:classid', (req, res) => {
    classController.deleteClass(req.params.classid).then((response) => {
        res.status(200).json(response.data);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

module.exports = router;
