const projectController = require('../controller/projectController');
const authentication = require('../utils/authentication');
const express = require('express');

const router = express.Router();

router.get('/alocated/:subjectId', authentication.authenticateProfessor, (req, res) => {
  projectController.getAlocated(req.params).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

router.put('/alocated/status', authentication.authenticateProfessor, (req, res) => {
  projectController.putAlocated(req.body).then((response) => {
    res.status(200).json(response.data)
  }).catch(err => {
    res.status(400).json({'msg': err})
  })
})

router.get('/:projectId', (req, res) => {

  projectController.getProject(req.params).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

module.exports = router
