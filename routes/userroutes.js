const router = require('express').Router();

const {
   getUsers,
   getUser,
   addUser,
   updateUser,
   addFriend,
   removeFriend,
   deleteUser
} = require('../controllers/usercontrollers') 

// /api/users

//route to get users, get a single user, add a user, update user, and delete user
router.route('/').get(getUsers).post(addUser).put(updateUser).delete(deleteUser)

router.route('/:userId').get(getUser)

//route to add and remove friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;