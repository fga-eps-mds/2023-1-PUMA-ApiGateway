const express = require('express');
const endpoints = require('../utils/endpoints');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
const keywordRouter = require('./keywordRouter');
const subjectRouter = require('./subjectRouter');
const classRouter = require('./classRouter');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(
    endpoints,
  );
});

module.exports = (app) => {
  app.use('/', [router]);
  app.use('/user', [userRouter]);
  app.use('/project', [projectRouter]);
  app.use('/subject', [subjectRouter]);
  app.use('/keyword', [keywordRouter]);
  app.use('/class', [classRouter]);
};
