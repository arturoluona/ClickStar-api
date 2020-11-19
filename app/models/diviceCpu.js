const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const diviceCpuSchema = new mongoose.Schema(
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
    ram: {
      type: Array
    },
    hdd: {
      type: Object
    },
    processor: {
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
diviceCpuSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('diviceCpu', diviceCpuSchema)
