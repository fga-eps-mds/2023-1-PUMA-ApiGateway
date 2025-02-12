const express = require('express');
const endpoints = require('../utils/endpoints');
const userRouter = require('./userRouter');
const projectRouter = require('./projectRouter');
const keywordRouter = require('./keywordRouter');
const subjectRouter = require('./subjectRouter');
const classRouter = require('./classRouter');
const contactRouter = require('./contactRouter');
const pumaInfoRouter = require('./pumaInfoRouter');
const externalRouter = require('./externalRouter');
const partnerRouter = require('./partnerRouter');
const bannerRouter = require('./bannerRouter');
const partnerProjectRouter = require('./partnerProjectRouter');

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
  app.use('/pumaInfo', [pumaInfoRouter]);
  app.use('/external', [externalRouter]);
  app.use('/partner', [partnerRouter]);
  app.use('/contact', [contactRouter]);
  app.use('/banner', [bannerRouter]);
  app.use('/contact', [contactRouter]);
  app.use('/partnerProject', [partnerProjectRouter]);
};
