const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
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
      type: Array
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
devicePrinterSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true })
module.exports = mongoose.model('devicePrinter', devicePrinterSchema)
