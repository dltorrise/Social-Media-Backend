const { Schema, Types } = require('mongoose');

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
      //might generate something random
      //default: 'Unnamed assignment',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { //pulled into JSON format run getters
      getters: true,
    },
  }
);

module.exports = userSchema;