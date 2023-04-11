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
            const newFriend = await Users.findOneAndUpdate({userId: req.params.id}, {$addToSet: {friends: req.body.userId}})
            res.json("Congratulations! You made a new freind!")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}


module.exports = usercontrollers


