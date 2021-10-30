const express = require('express');
const projectController = require('../controller/projectController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/alocated/:subjectId', authentication.authenticateProfessor, (req, res) => {
  projectController.getAlocated(req.params.subjectId).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({ msg: err });
  });
});

router.put('/alocated/status', authentication.authenticateProfessor, (req, res) => {
  projectController.putAlocated(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({ msg: err });
  });
});

router.get('/project/:projectId', authentication.authenticateProfessor, (req, res) => {
  projectController.getProject(req.params.projectId).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({ msg: err });
  });
});

router.get('/subject', authentication.authenticateAny, (req, res) => {
  projectController.getAllSubjects(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({ msg: err });
  });
});

router.put('/proposal/:projectId', authentication.authenticateProfessor, (req, res) => {
  projectController.putProposal(req.params.projectId, req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({ msg: err });
  });
});

router.put('/alocate/:projectId/status', authentication.authenticateProfessor, (req, res) => {
  projectController.putProposalStatus(req.params.projectId, req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((err) => {
    res.status(400).json({ msg: err, hehe: 'foi o gay' });
  });
});

router.post('/', (req, res) => {
  projectController.addProject(req.body).then((response) => {
    const { data } = response;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.post('/upload', (req, res) => {
  projectController.addFile(req.body).then((response) => {
    const { data } = response;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.delete('/delete/:projectId', (req, res) => {
  projectController.deleteProject(req.params.projectId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    console.log(error)
    res.status(400).json({msg: 'deu erro'});
  });
});

module.exports = router;
