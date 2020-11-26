const model = require('../models/orden')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const serviceOrder = require('../services/orden')
const mongoose = require('mongoose')

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
