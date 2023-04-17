const router = require('express').Router();

const {
    //functions from controller
    getThoughts,
    getThought,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../controllers/thoughtcontrollers'); 


// api/thoughts

//route to get thoughts, get a single thought, post a new thought, update a thought, and delete a thought
router.route('/').get(getThoughts).get(getThought).post(newThought).put(updateThought).delete(deleteThought)

//route to add and delete a reaction
router.route('/:thoughtId/reactions').post(newReaction).delete(deleteReaction)


module.exports = router;