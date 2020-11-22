const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const deviceRouterSchema = new mongoose.Schema(
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
deviceRouterSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('deviceRouter', deviceRouterSchema)
