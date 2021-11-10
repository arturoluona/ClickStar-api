const model = require('../models/orden')
const userModel = require('../models/user')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const serviceOrder = require('../services/orden')
const mongoose = require('mongoose')

const getItemsOrdenByCi = (ci) => {
  return new Promise((resolve, reject) => {
    userModel.findOne({ci}).then((a) => {
      if(a) {
        model.find({customer: mongoose.Types.ObjectId(a._id)})
          .then((res) => resolve(res))
          .catch((err) => reject(err))
      } else reject({code: 404, message: 'NOT_FOUND'})
    })
    .catch((err) => reject(err))
  })
}

/********************
 * Public functions *
 ********************/

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItems = async (req, res, next) => {
  try {
    const query = await db.checkQueryString(req.query)
    const aggregation = db.getItemsOrdenByUser(model, query, req.user)
    res.status(200).json(await db.getItemsAggregate(req, model, aggregation))
    next()
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItemsSearch = async (req, res) => {
  try {
    req = matchedData(req)
    const resp = await model.findOne({idOrden: req.id})
    res.status(200).json(resp)
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItemsByCi = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const resp = await getItemsOrdenByCi(id)
    res.status(200).json(resp)
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItem = async (req, res, next) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json( await serviceOrder.getItem(id, model))
    next()
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.updateItem = async (req, res, next) => {
  try {
    const { user, originalUrl } = req
    req = matchedData(req)
    req.historic = {
      status: req.status
    }
    req.device = {
      _id: new mongoose.Types.ObjectId(req.device._id),
      label: req.device
    }
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.updateItem(id, model, req, user, originalUrl))
    next()
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async (req, res, next) => {
  try {
    const { user, originalUrl } = req
    req = matchedData(req)
    req.historic = {
      status: req.status
    }
    req.device = {
      _id: new mongoose.Types.ObjectId(req.device._id),
      label: req.device
    }
    res.status(201).json(await db.createItem(req, model, user, originalUrl)) //
    next()
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.deleteItem = async (req, res, next) => {
  try {
    const { user, originalUrl } = req
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.deleteItem(id, model, user, originalUrl))
    next()
  } catch (error) {
    utils.handleError(res, error)
  }
}
/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItemsDeleted = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    res.status(200).json(await db.getItemsDeleted(req, model, query))
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItemDeleted = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.getItemDelete(id, model))
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.restoreItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.restoreItem(id, model))
  } catch (error) {
    utils.handleError(res, error)
  }
}
