const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const divicePrinterSchema = new mongoose.Schema(
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
      type: Object
    },
    tinta: {
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
divicePrinterSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('divicePrinter', divicePrinterSchema)
