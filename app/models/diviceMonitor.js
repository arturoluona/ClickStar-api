const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const diviceMonitorSchema = new mongoose.Schema(
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
    inch: {
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
diviceMonitorSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('diviceMonitor', diviceMonitorSchema)
