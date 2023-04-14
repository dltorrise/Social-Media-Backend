const { Users, Thoughts } = require('../models');

const usercontrollers = {
    async getUsers (req, res) {
        try {
           const userData = await Users.find({})
           .select('-__v')
           res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async getUser (req, res) {
        try {
           const userData = await Users.find({userId: req.params.id})
        //    const thoughtData = await Thoughts.find({userId: req.params.id})
           .select('-__v')
        //    .populate(thoughtData)
           res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },


    async addUser (req, res) {
        try {
            const newUser = await Users.create( req.body) //will create user just with id
            res.json(`${newUser.username} has been added to the API`)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateUser (req, res) {
        try {
            const newUser = await Users.findOneAndUpdate({userId: req.params.id}, req.body, {new: true}) 
            res.json(`${newUser.username}'s info has been updated.`)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async addFriend (req, res) {
        try {
            const newFriend = await Users.findOneAndUpdate({userId: req.params.id}, {$addToSet: {friends: req.body.userId}})
            res.json("Congratulations! You made a new friend!")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async removeFriend (req, res) {
        try {
            const deletedFriend = await Users.findOneAndUpdate({userId: req.params.id}, {$pull: {friends: req.body.userId}})
            res.json("You have removed this person as a friend")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteUser (req, res) {
        try {
            const exUser = await Users.findOneAndDelete({userId: req.params.id})
            res.json("We are sorry to see you go. Feel free to sign up again any time!")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}


module.exports = usercontrollers


