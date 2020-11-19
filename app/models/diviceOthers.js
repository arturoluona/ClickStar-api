const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const diviceOthersSchema = new mongoose.Schema(
  {
    nameDivice: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    make: {
      type: String,
      required: true
    },
    serial: {
      type: String,
      required: true
    },

    description: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
diviceOthersSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('diviceOthers', diviceOthersSchema)
