const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
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
deviceRouterSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true })
module.exports = mongoose.model('deviceRouter', deviceRouterSchema)
