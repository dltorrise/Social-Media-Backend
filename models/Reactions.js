const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxlength: 280,
   
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function(value) {
                return value.toDateString()
            }
          } 
    },
    {
        toJSON: { //pulled into JSON format run getters
          getters: true,
        },
        id: false //otherwise it will create an id property
      }
      )



      //because this won't be turned into a model, it can just be exported as a schema
      module.exports = reactionsSchema;