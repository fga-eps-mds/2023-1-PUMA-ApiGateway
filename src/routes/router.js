const express = require('express');
const endpoints = require('../utils/endpoints');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
const knowledgeAreaRouter = require('./knowledgeAreaRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    endpoints,
  );
});

module.exports = (app) => {
  // app.use('/', [router, userRouter, projectRouter]);
  app.use('/', [router]);
  app.use('/', [userRouter]);
  app.use('/project', [projectRouter]);
  app.use('/areas-conhecimento', [knowledgeAreaRouter]);
};
