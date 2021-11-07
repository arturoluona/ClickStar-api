const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2')

const devicePcSchema = new mongoose.Schema(
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
      type: String
    },
    battery: {
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
devicePcSchema.plugin(mongoosePaginate)
devicePcSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true })
module.exports = mongoose.model('devicePc', devicePcSchema)
