const projectController = require('../controller/projectController');
const authentication = require('../utils/authentication');
const express = require('express');

const router = express.Router();

router.get('/alocated/:subjectId', (req, res) => {
  projectController.getAlocated(req.params).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

router.put('/alocated/status', (req, res) => {
  projectController.putAlocated(req.body).then((response) => {
    res.status(200).json(response.data)
  }).catch(err => {
    res.status(400).json({'msg': err})
  })
})

router.get('/project/:projectId', (req, res) => {

  projectController.getProject(req.params).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

router.get('/subject', (req, res) => {
  projectController.getAllSubjects(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

router.put('/proposal/:projectId', (req, res) => {
  projectController.putProposal(req).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

router.put('/alocate/:projectId/status', (req, res) => {
  projectController.putProposalStatus(req).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

module.exports = router
