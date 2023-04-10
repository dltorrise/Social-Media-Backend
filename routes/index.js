const router = require('express').Router();
const userRoutes = require('./userroutes');
// const userThoughtsRoutes = require('./userthoughtsroutes');

router.use('/api/users', userRoutes);
// router.use('/api/userthoughts', userThoughtsRoutes);

module.exports = router;
