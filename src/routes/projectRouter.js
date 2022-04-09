const express = require('express');
const projectController = require('../controller/projectController');
const authentication = require('../utils/authentication');
const alocateController = require('../controller/alocateController');

const router = express.Router();

router.post('/', authentication.authenticateAny, (req, res) => {
  projectController.addProject(req).then((response) => {
    const { data } = response;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/alocated/:subjectId', authentication.authenticateProfessor, (req, res) => {
  projectController.getAlocated(req.params.subjectId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/myProposals', authentication.authenticateAny, (req, res) => {
  projectController.getMyProposals(req).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.put('/alocated/status', authentication.authenticateProfessor, (req, res) => {
  projectController.putAlocated(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/project/:projectId', authentication.authenticateAny, (req, res) => {
  projectController.getProject(req.params.projectId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/palavra-chave', (req, res) => {
  projectController.getKeywords().then((response) => {
    res.status(200).json(response.data);
  }).catch(() => {
    res.status(400).json({});
  });
});

router.get('/subject', authentication.authenticateAny, (req, res) => {
  projectController.getAllSubjects(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.put('/proposal/:projectId', authentication.authenticateProfessor, (req, res) => {
  projectController.putProposal(req.params.projectId, req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.put('/alocate/:projectId/status', authentication.authenticateProfessor, (req, res) => {
  projectController.putProposalStatus(req.params.projectId, req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ msg: err, hehe: 'foi o gay' });
  });
});

router.post('/upload', authentication.authenticateAny, (req, res) => {
  projectController.addFile(req).then((response) => {
    const { data } = response;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.delete('/delete/:projectId', authentication.authenticateAny, (req, res) => {
  projectController.deleteProject(req.params.projectId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    console.log(error)
    res.status(400).json({ error });
  });
});

router.get('/initial', (req, res) => {
  projectController.initial().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

module.exports = router;
