const { Users, Thoughts } = require('../models');

const thoughtcontrollers = {

    async getThoughts (req, res) {
        try {
            //difference between find with object in it and without
            const thoughtData = await Thoughts.find({})
            .select('-__v')
            res.json(thoughtData)
         } catch (err) {
             console.log(err)
             res.status(500).json(err)
         }
    },

    async newThought (req,res) {
        try {
        const newThought = await Thoughts.create(req.body)
        //would this just add the id though?
        await Users.findOneAndUpdate({userId: req.params.id}, {$addToSet: {thoughts: newThought.thoughtId}})
        res.json("Thank you for adding your thoughts!")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateThought (req,res) {
        try {
            //$set requires req.body because it looks for an object
        const thought = await Thoughts.findOneAndUpdate({thoughtId: req.params.thoughtId}, {$set: req.body})
        res.json("Your thought has been updated.")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteThought (req,res) {
        try {
        const exThought = await Thoughts.findOneAndDelete({thoughtId: req.params.thoughtId})
        res.json("Your thought has been deleted.")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async newReaction (req, res) {
        try {
            const newReaction = await Thoughts.findOneAndUpdate({thoughtId: req.params.thoughtId}, {$addToSet: {reactions: req.body}})
            res.json("Your reaction has been added.")
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
    },

    async deleteReaction (req, res) {
        try {
            const exReaction = await Thoughts.findOneAndUpdate({thoughtId: req.params.thoughtId}, {$pull: {reactions: {reactionId: req.body.reactionId}}})
            res.json("Your reaction has been deleted.")
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
    },
}

module.exports = thoughtcontrollers
