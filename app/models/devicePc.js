const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const deviceLaptopSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true
    },
    make: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['laptop', 'cpu']
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
    loader: {
      type: Object
    },
    battery: {
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
deviceLaptopSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('deviceLaptop', deviceLaptopSchema)
