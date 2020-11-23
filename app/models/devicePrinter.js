const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const devicePrinterSchema = new mongoose.Schema(
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
    cabezal: {
      type: String
    },
    tinta: {
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
devicePrinterSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('devicePrinter', devicePrinterSchema)
