const router = require('express').Router();

const {
    //functions from controller
    getThoughts,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../controllers/thoughtcontrollers'); 


// api/thoughts

//get thoughts
router.route('/').get(getThoughts)

//add a thought for a user
router.route('/:id').post(newThought)

//update or delete a thought
router.route('/:thoughtId').put(updateThought).delete(deleteThought)

//add or delete a reaction
router.route('/react/:thoughtId').put(newReaction).delete(deleteReaction)


module.exports = router;