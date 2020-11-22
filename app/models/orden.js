const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const nano = require('nanoid/non-secure')

const HistoricSchema = new mongoose.Schema({
  status: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    require: true,
    default: Date.now
  }
})

const ordenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      required: true
    },
    idOrden: {
      type: String,
      default: () => nano.customAlphabet('1234567890', 6)(), // hash of idOrden
      require: true
    },
    status: {
      type: String,
      required: true,
      enum: [
        'wait',
        'process',
        'completed',
        'delivered',
        'cancelado'
      ]
    },
    devices: {  // 
      type: Array,
      required: true
    },
    description: {
      type: String
    },
    price: {
      type: String
    },
    historic: {
      type: [HistoricSchema],
      require: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ordenSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('orden', ordenSchema)
