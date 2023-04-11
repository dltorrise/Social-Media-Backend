const router = require('express').Router();

const {
   getUsers,
   addUser,
   addFriend
} = require('../controllers/usercontrollers') //add path

// /api/users

//route to get users and add users
router.route('/').get(getUsers).post(addUser)

//route to add friends

router.route('/add-friend/:id').post(addFriend)


module.exports = router;