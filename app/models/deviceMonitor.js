const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const deviceMonitorSchema = new mongoose.Schema(
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
    inch: {  // 
      type: String
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
deviceMonitorSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('deviceMonitor', deviceMonitorSchema)
