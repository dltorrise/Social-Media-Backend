const router = require('express').Router();
const userRoutes = require('./userroutes');
const thoughtRoutes = require('./thoughtroutes');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

module.exports = router;

//here is where all my code screws up