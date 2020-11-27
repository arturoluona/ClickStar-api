const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const auditoriaGlobalSchema = new mongoose.Schema(
  {
    user: {
      type: Object,
      required: true
    },
    before: {
      type: Object,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    after: {
      type: Object,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
auditoriaGlobalSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('auditoriaGlobal', auditoriaGlobalSchema)
