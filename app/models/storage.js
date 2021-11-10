/* eslint-disable camelcase */
const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const mongoosePaginate = require('mongoose-paginate-v2')

const StorageSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    fileName: {
      type: String,
      required: true
    },
    fileType: {
      type: String,
      required: true
    },
    origin: {
      type: String
    },
    small: {
      type: String
    },
    medium: {
      type: String
    },
    large: {
      type: String
    },
    mimetype: {
      type: String
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

StorageSchema.post('save', () => {
  console.log('INSERCION EN storage')
})

StorageSchema.pre('findOneAndRemove', async () => {
  console.log('DELETE EN storage')
})

StorageSchema.post('findOneAndUpdate', async () => {
  console.log('ACTUALIZACION EN Storages')
})

StorageSchema.plugin(mongoosePaginate)
StorageSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true })
module.exports = mongoose.model('Storage', StorageSchema)
