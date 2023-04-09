const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
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
    thoughts: [{type: Schema.Types.ObjectId, ref: "userthoughts"}]
  },
  {
    toJSON: { //pulled into JSON format run getters
      getters: true,
    },
    id: false, //does not create id key
  }
);

module.exports = userSchema;