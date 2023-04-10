const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    userName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought', //looks for thought collection in database
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user', //references other users
        }
    ],
  },
  {
    toJSON: { //pulled into JSON format run getters
      getters: true, //runs getters before JSON data is returned
    },
    id: false 
  }
);
const Users = model('user', userSchema);
module.exports = Users;