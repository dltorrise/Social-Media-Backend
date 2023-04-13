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
    },
    createdAt: {
      type: Date,
      default: Date.now,
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
const Thoughts = model('thoughts', userThoughtsSchema);

module.exports = Thoughts;