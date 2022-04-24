const express = require('express');
const projectController = require('../controller/projectController');
const authentication = require('../utils/authentication');

const router = express.Router();

router.get('/get/:projectId', authentication.authenticateAny, (req, res) => {
  projectController.getProject(req.params.projectId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.post('/create', authentication.authenticateAny, (req, res) => {
  projectController.addProject(req).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/update', authentication.authenticateAny, (req, res) => {
  projectController.putProject(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.delete('/delete/:projectId', authentication.authenticateAny, (req, res) => {
  projectController.deleteProject(req.params.projectId).then((response) => {
    res.status(200).json(response);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/evaluate', authentication.authenticateProfessor, (req, res) => {
  projectController.evaluateProject(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/reallocate', authentication.authenticateProfessor, (req, res) => {
  projectController.reallocateProject(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/myProposals', authentication.authenticateAny, (req, res) => {
  projectController.getMyProposals(req).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.post('/upload', authentication.authenticateAny, (req, res) => {
  projectController.addFile(req).then((response) => {
    const { data } = response;
    res.status(200).json({ data });
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/keywords', (req, res) => {
  projectController.getKeywordsAvailbleToProject().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/palavra-chave', (req, res) => {
  projectController.getKeywords().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/subject', authentication.authenticateAny, (req, res) => {
  projectController.getSubjects(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/initial', (req, res) => {
  projectController.initial().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.post('/subject', (req, res) => {
  projectController.addSubject(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/subject/keywords', (req, res) => {
  projectController.getAvailableKeywordsToSubject().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.get('/subareas', (req, res) => {
  projectController.getSubareas().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

router.post('/subject', (req, res) => {
  projectController.addSubject(req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/subject/keywords', (req, res) => {
  projectController.getAvailableKeywordsToSubject().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/subareas', (req, res) => {
  projectController.getSubareas().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/knowledgeareas', (req, res) => {
  projectController.getKnowledgeAreas().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});


router.get('/professors', (req, res) => {
  projectController.getProfessors().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/subjectList', (req, res) => {
  projectController.getSubjects().then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.get('/subject/:subjectid', (req, res) => {
  projectController.getSubject(parseInt(req.params.subjectid, 10)).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.put('/subject/:subjectid', (req, res) => {
  projectController.updateSubject(parseInt(req.params.subjectid, 10), req.body).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

router.delete('/subject/:subjectId', (req, res) => {
  projectController.deleteSubject(req.params.subjectId).then((response) => {
    res.status(200).json(response.data);
  }).catch((error) => {
    res.status(400).json({ error });
  });
});

// Palavras-Chave - CRUD
router.get('/palavra-chave', (req, res) => {
  projectController.getKeywords().then((response) => {
    res.status(200).json(response.data);
  }).catch((response) => {
    res.status(400).json({ response });
  });
});

// Body com campo Keyword necessário
router.post('/palavra-chave', (req, res) => { // Falta tratamento dos dados
  projectController.addKeyword(req.body).then((response) => {
    res.status(200).json({ response });
  }).catch((e) => {
    res.status(400).json({ 'error': e });
  });
});

// Add Keyword into Subject
router.post('/subject/keyword', (req, res) => { // Falta tratamento dos dados
  projectController.addKeywordSubject(req.body).then((response) => {
    res.status(200).json({ response });
  }).catch((e) => {
    res.status(400).json({ 'error': e });
  });
});

// Atualização Keyword Subject
router.put('/switch/subject', (req, res) => {
  projectController.updateSubjectKeyword(req.body).then((response) => {
    res.status(200).json({ response });
  }).catch((e) => {
    res.status(400).json({ 'error': e });
  });
});

// Body necessita da keywordid (id palavra chave a ser mudada) e newKeyword (nova palavra a ser atualizada)
router.put('/palavra-chave/edit', (req, res) => {
  const { body, params } = req;
  projectController.editKeyword(body).then((response) => {
    res.status(200).json(response.data);
  }).catch((e) => {
    res.status(400).json({ 'response': body, 'error': e });
  });
});

// Parâmetro vai na url devido a deleção ser via update
router.put('/palavra-chave/:keywordid/delete', (req, res) => {
  const { body, params } = req;
  projectController.deleteKeyword(params).then((response) => {
    res.status(200).json(response.data);
  }).catch((e) => {
    res.status(400).json({ 'bruno': params, 'response': parseInt(params) });
  });
});

// Body com campo Keyword necessário
router.post('/palavra-chave', (req, res) => { // Falta tratamento dos dados
  projectController.addKeyword(req.body).then((response) => {
    res.status(200).json({ response });
  }).catch((e) => {
    res.status(400).json({ 'error': e });
  });
});

router.get('/palavra-chave2', (req, res) => {
  projectController.getKeywordsAlternative().then((response) => {
    res.status(200).json(response.data);
  }).catch((response) => {
    res.status(400).json({ response });
  });
});

module.exports = router;