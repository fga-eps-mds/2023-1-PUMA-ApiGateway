const express = require('express');
const router = express.Router();

const alocateController = require('../controller/alocateController');

router.get('/palavras-chave', (req, res) => {
  alocateController.getKeywords().then((response) => {
    res.status(200).json(response.data);
  }).catch(() => {
    res.status(400).json({});
  });
});

router.post('', (req, res) => {
  console.log('gatway');
  const { body } = req;
  alocateController.getSubject(req.body).then((response) => {
    console.log('sucesso do alocate');
    // console.log(response);
    res.status(200).json(response.data);
  }).catch((response) => {
    // console.log(response);
    res.status(400).json({ response });
  });
});

module.exports = router;
