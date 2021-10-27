const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const deviceOthersSchema = new mongoose.Schema(
  {
    name: {
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
deviceOthersSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('deviceOthers', deviceOthersSchema)
