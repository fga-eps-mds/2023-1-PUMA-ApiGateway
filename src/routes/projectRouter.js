const projectController = require('../controller/projectController');
const authentication = require('../utils/authentication');
const express = require('express');

const router = express.Router();

router.get('/alocated/:subjectId', authentication.authenticateProfessor, (req, res) => {
  console.log("asfdasdf")
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

router.get('/project/:projectId', authentication.authenticateProfessor, (req, res) => {
  projectController.getProject(req.params).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

router.get('/subject', authentication.authenticateAny, (req, res) => {
  projectController.getAllSubjects(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

router.put('/proposal/:projectId', authentication.authenticateProfessor, (req, res) => {
  projectController.putProposal(req).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({'msg': err});
  });
});

router.put('/alocate/:projectId/status', authentication.authenticateProfessor, (req, res) => {
  projectController.putProposalStatus(req).then((response) => {
    console.log('vai ser 200');
    res.status(200).json(response.data);
  }).catch((err) => {
    console.log(err);
    res.status(400).json({ msg: err, hehe: 'foi o gay'});
  });
});

module.exports = router
