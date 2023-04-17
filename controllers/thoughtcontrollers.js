const { Users, Thoughts } = require('../models');

const thoughtcontrollers = {

    async getThoughts (req, res) {
        try {
            //passing in curly braces means you are telling it this should be object type
            const thoughtData = await Thoughts.find({})
            .select('-__v')
            res.json(thoughtData)
         } catch (err) {
             console.log(err)
             res.status(500).json(err)
         }
    },
//same as getuser, i can't make it narrow it down
    async getThought (req, res) {
        try {
            //passing in curly braces means you are telling it this should be object type
            const thoughtData = await Thoughts.find({_id: req.body.userId})
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
        //finds user by their _id (but will reference it as userId in body) and adds the thought's _id to thooughts array
        const user = await Users.findOneAndUpdate({_id: req.body.userId}, {$addToSet: {thoughts: newThought._id}})
        res.json("Thank you for adding your thoughts!")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateThought (req,res) {
        try {
            //$set requires req.body because it looks for an object because you need a key and a value
            //$set changes based on what's passed in, telling keys you need to update and values it needs to change it to
        const thought = await Thoughts.findOneAndUpdate({_id: req.body.thoughtId}, {$set: {thoughtText: req.body.thoughtText}})
        res.json("Your thought has been updated.")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteThought (req,res) {
        try {
        const exThought = await Thoughts.findOneAndDelete({_id: req.body.thoughtId})
        //$pull matches key and then pulls it
        const user = await Users.findOneAndUpdate({thoughts: req.body.thoughtId}, {$pull: {thoughts: req.body.thoughtId}})
        res.json("Your thought has been deleted.")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async newReaction (req, res) {
        try {
            const newReaction = await Thoughts.findOneAndUpdate({_id: req.params.thoughtId}, {$addToSet: {reactions: req.body}})
            res.json("Your reaction has been added.")
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
    },

    async deleteReaction (req, res) {
        try {
            const exReaction = await Thoughts.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: {reactionId: req.body.reactionId}}})
            res.json("Your reaction has been deleted.")
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
    },
}

module.exports = thoughtcontrollers
