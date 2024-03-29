const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2')

const servicesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['laptop', 'cpu', 'impresora', 'modem/router', 'monitor', 'otros']
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
servicesSchema.plugin(mongoosePaginate)
servicesSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true })
module.exports = mongoose.model('services', servicesSchema)
