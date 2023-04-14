const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      unique: true, 
      required: true,
      trimmed: true,
      validate: function(v) {
        return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(v)
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    email: {
      type: String,
      unique: true, 
      required: true,
      trimmed: true,
      maxlength: 50,
      minlength: 4,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts', //looks for thought collection in database
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users', //references other users
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

userSchema
.virtual('friendCount')
.get( function() {
  return this.friends.length
})

const Users = model('user', userSchema);
module.exports = Users;