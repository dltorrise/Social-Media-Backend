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

//how can I get this to display an individual user and also populate
    async getUser (req, res) {
        try {
           const userData = await Users.find({_id: req.body._id})
        //    let thoughtData = await Thoughts.find({userId: req.params.id})
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
            const newUser = await Users.create( req.body) 
            res.json(`${newUser.username} has been added to the API`)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

//"cannot read properties of null"
    async updateUser (req, res) {
        try {
            const newUser = await Users.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}) 
            res.json(`${newUser.username}'s info has been updated.`)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async addFriend (req, res) {
        try {
            const newFriend = await Users.findOneAndUpdate({_id: req.params.userId}, {$addToSet: {friends: {_id: req.params.friendId}}})
            res.json("Congratulations! You made a new friend!")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
//this route not pulling for some reason
    async removeFriend (req, res) {
        try {
            const deletedFriend = await Users.findOneAndUpdate({_id: req.params.userId}, {$pull: {friends: {_id: req.params.friendId}}})
            res.json("You have removed this person as a friend")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
//route working just bonus
    async deleteUser (req, res) {
        try {
            const exUser = await Users.findOneAndDelete({_id: req.body._id})
            // {*BONUS*} pull thoughts associated with user
            // const deletedThoughts = await Thoughts.findByIdAndUpdate({userId: req.params.id}, {$pull: {thoughts}})
            res.json("We are sorry to see you go. Feel free to sign up again any time!")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}


module.exports = usercontrollers


