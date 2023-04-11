const { Users } = require('../models');
const ObjectId = require('mongodb').ObjectId;

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

    async addUser (req, res) {
        try {
            const newUser = await Users.create( req.body) //will create user just with id
            res.json(`${newUser.username} has been added to the API`)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async addFriend (req, res) {
        try {
            //want to change it so you find them by _id and username in friendslist
            const newFriend = await Users.findOneAndUpdate({userId: req.params.id}, {$addToSet: {friends: req.body.userId}})
            res.json("Congratulations! You made a new freind!")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async removeFriend (req, res) {
        try {
            //want to change it so you find them by _id and username in friendslist
            const deletedFriend = await Users.findOneAndUpdate({userId: req.params.id}, {$pull: {friends: req.body.userId}})
            //how to reference specific person
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


