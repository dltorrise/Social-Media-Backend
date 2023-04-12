const router = require('express').Router();

const {
    //functions from controller
    getThoughts,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../controllers/thoughtcontrollers'); //add path


// api/thoughts

//get thoughts
router.route('/').get(getThoughts)

//add a thought for a user
router.route('/:id').post(newThought)

//update or delete a thought
//for new reaction would it be put or post??
router.route('/:thoughtId').put(updateThought).delete(deleteThought).put(newReaction).put(deleteReaction)

//add or delete a reaction
router.route('/')


module.exports = router;