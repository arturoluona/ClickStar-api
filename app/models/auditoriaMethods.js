const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const auditoriaMethodsSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
      required: true
    },
    method: {
      type: String,
      required: true
    },
    rute: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
auditoriaMethodsSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('auditoriaMethods', auditoriaMethodsSchema)
