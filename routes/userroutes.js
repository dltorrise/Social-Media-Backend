const router = require('express').Router();

const {
   getUsers,
   addUser
} = require('../controllers/usercontrollers') //add path

// /api/users

//route to get users
router.route('/').get(getUsers).post(addUser)




module.exports = router;