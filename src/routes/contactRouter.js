const express = require('express');
const contactController = require('../controller/contactController');

const router = express.Router();

router.get('/', (_, res) => {
    contactController.getContacts().then((response) => {
        console.log(response.status)
        if(response.status === 404) {
            res.status(404).json({ message: response.error })
        } else {
            res.status(200).json(response);
        }
    }).catch((response) => {
        res.status(200).json(response);
    });
});

router.post('/create', (req, res) => {
    contactController.createContact(req).then((response) => {
        console.log(response.status)
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json(error);
    });
});

module.exports = router;