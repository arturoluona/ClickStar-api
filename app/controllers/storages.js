/* eslint-disable no-async-promise-executor */
const { matchedData } = require('express-validator')
const sharp = require('sharp') // Manipulacion de imagenes
const { v4: uuidv4 } = require('uuid') // hasheo
const path = require('path') // obtener nombre de archivo por rutas
const slugify = require('slugify') // hacer slug
const cryptoRandomString = require('crypto-random-string') // hasheo
const multer = require('multer')
const db = require('../middleware/db')
const model = require('../models/storage')
const utils = require('../middleware/utils')

const router = 'public/media/'

/*********************
 * Private functions *
 *********************/

const compressImage = (pathInPut, name = '', size = null) => new Promise((resolve, reject) => {
  try {
    const relativePath = `${name}`
    const pathOutPut = `${router}${relativePath}`

    sharp(pathInPut)
      .webp({ quality: 85 })
      .resize(size, size)
      .toFile(pathOutPut, (err) => {
        if (!err) {
          resolve(relativePath)
        } else {
          reject(err)
        }
      })
  } catch (e) {
    reject(e)
  }
})

const saveImage = (file) => new Promise(async (resolve) => {
  const filesWebp = {}
  filesWebp.fileName = file.filename
  filesWebp.fileType = '.png'
  const pathOriginal = `${router}${filesWebp.fileName}`

  filesWebp.origin = await compressImage(pathOriginal, `origin_${filesWebp.fileName}`)
  filesWebp.small = await compressImage(pathOriginal, `small_${filesWebp.fileName}`, 200)
  filesWebp.medium = await compressImage(pathOriginal, `medium_${filesWebp.fileName}`, 600)
  filesWebp.large = await compressImage(pathOriginal, `large_${filesWebp.fileName}`, 1000)

  console.log(filesWebp)
  resolve(filesWebp)
})

const storageUploadMedia = (name) => new Promise(async (resolve) => {
  const errorFile = `${process.env.API_URL}/media/${name}`
  resolve(errorFile)
})

const loadInS3Images = (file) => new Promise(async (resolve) => {
  file.image = 'image'
  file.origin = await storageUploadMedia(file.origin)
  file.small = await storageUploadMedia(file.small)
  file.medium = await storageUploadMedia(file.medium)
  file.large = await storageUploadMedia(file.large)
  resolve(file)
})

const otherType = (file = {}) => new Promise(async (resolve) => {
  const ext = path.extname(file.filename)
  const fileName = `${cryptoRandomString({ length: 3 })}-${slugify(file.filename)}`
  // await file.mv(absolute)
  resolve({
    fileName,
    fileType: ext,
    originPath: await storageUploadMedia(fileName)
  })
})

const storages = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${router}`)
  },
  filename(req, file, cb) {
    console.log('porquied')
    if (file.mimetype.includes('image')) {
      cb(null, `${uuidv4()}.png`)
    } else {
      cb(null, `${uuidv4()}${path.extname(file.originalname)}`)
    }
  }
})

/*********************
 * Public functions *
 *********************/

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItems = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    res.status(200).json(await db.getItems(req, model, query))
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.getItem(id, model))
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

exports.upload = multer({ storage: storages })

exports.createItem = async (req, res) => {
  try {
    console.log('entramos')
    if (!req.files) { // si no enviaron archivos
      return utils.handleError(res, { code: 400, message: 'No files were uploaded.' })
    }
    const { files = [] } = req
    const { _id } = req.user
    const listFiles = Array.isArray(files) ? files : [files]
    if (!listFiles.length) {
      utils.handleError(res, { code: 400, message: 'No files were uploaded.' })
    }

    const data = await Promise.all(
      listFiles.map(async (file) => {
        let objectFile = {}
        if (file.mimetype.includes('image')) { // Check is image
          objectFile = await saveImage(file)
          objectFile = await loadInS3Images(objectFile)
        } else {
          objectFile = await otherType(file)
        }
        // objectFile.mimetype = mime.getType(file.name)
        objectFile.userId = _id
        return await db.createItem(objectFile, model)
      })
    )
    console.log(data)
    res.status(200).json(data)
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.deleteLogic(id, model))
  } catch (error) {
    utils.handleError(res, error)
  }
}

// The files will not be updated, every time you want to update a new one is simply created
// /**
//  * Update item function called by route
//  * @param {Object} req - request object
//  * @param {Object} res - response object
//  */
// exports.updateItem = async (req, res) => {
//   try {
//     req = matchedData(req)
//     const id = await utils.isIDGood(req.id)
//     res.status(200).json(await db.updateItem(id, model))
//   } catch (error) {
//     utils.handleError(res, error)
//   }
// }
