const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const typeDevicesSchema = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
typeDevicesSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('typeDevices', typeDevicesSchema)
