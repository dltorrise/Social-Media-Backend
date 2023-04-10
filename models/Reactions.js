const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reaction: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
          } 
    },
    {
        toJSON: { //pulled into JSON format run getters
          getters: true,
        },
        id: false //otherwise it will create an id property
      }
      )

      module.exports = reactionsSchema;