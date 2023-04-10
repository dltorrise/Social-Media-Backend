const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reactions');

const userThoughtsSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thought: {
      type: String,
      required: true,
    //   maxlength: 50,
    //   minlength: 4,
      //might generate something random
      //default: 'Unnamed assignment',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
  },
 
  {
    toJSON: { //pulled into JSON format run getters
      getters: true,
    },
    id: false, //does not create id key
  }
);

//intialize the model
const UserThoughts = model('userThoughts', userThoughtsSchema);

module.exports = UserThoughts;