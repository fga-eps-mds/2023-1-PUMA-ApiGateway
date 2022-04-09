const express = require('express');
const router = express.Router();

const alocateController = require('../controller/alocateController');

// router.get('/palavras-chave', (req, res) => {
//   alocateController.getKeywords().then((response) => {
//     res.status(200).json(response.data);
//   }).catch(() => {
//     res.status(400).json({});
//   });
// });

router.post('', (req, res) => {
  alocateController.getSubject(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((response) => {
    res.status(400).json({ response });
  });
});

module.exports = router;
