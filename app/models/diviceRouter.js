const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const diviceRouterSchema = new mongoose.Schema(
  {
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
    loader: {
      type: Object
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
diviceRouterSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('diviceRouter', diviceRouterSchema)
