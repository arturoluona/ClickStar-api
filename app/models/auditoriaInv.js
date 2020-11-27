const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const auditoriaInvSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
      required: true
    },
    inventory: {
      type: Object,
      required: true
    },
    qty: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
auditoriaInvSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('auditoriaInv', auditoriaInvSchema)
