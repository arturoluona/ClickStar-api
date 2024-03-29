const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const nano = require('nanoid/non-secure')
const aggregatePaginate = require('mongoose-aggregate-paginate-v2')

const HistoricSchema = new mongoose.Schema({
  status: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true,
    default: Date.now
  }
})

const ordenSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.ObjectId,
      required: true
    },
    tecnico: {
      type: mongoose.Schema.ObjectId,
      required: true
    },
    idOrden: {
      type: String,
      default: () => nano.customAlphabet('1234567890', 6)().toString(), // hash of idOrden
      require: true
    },
    status: {
      type: String,
      required: true,
      enum: ['wait', 'process', 'completed', 'delivered', 'cancelado']
    },
    typeDevice: {
      type: Object
    },
    device: {
      type: {
        _id: { type: String },
        label: { type: Object }
      },
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

ordenSchema.plugin(aggregatePaginate)
ordenSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true })
module.exports = mongoose.model('orden', ordenSchema)
