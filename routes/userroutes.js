const router = require('express').Router();

const {
   getUsers,
   addUser,
   addFriend,
   removeFriend,
   deleteUser
} = require('../controllers/usercontrollers') //add path

// /api/users

//route to get all users and add new users
router.route('/').get(getUsers).post(addUser)

//route to add friends
router.route('/add-friend/:id').post(addFriend)

//route to remove friends
//it is a put route not a delete route because even though
//you are removing a friend, you are really updating a user
router.route('/remove-friend/:id').put(removeFriend)

//route to get a specific user, update them, or delete them
//pull them from friend's lists
router.route('/:id').delete(deleteUser)




module.exports = router;