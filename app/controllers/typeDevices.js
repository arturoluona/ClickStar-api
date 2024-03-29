const model = require('../models/typeDevice')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
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
    const { user } = req
    const { originalUrl } = req
    const query = await db.checkQueryString(req.query)
    res.status(200).json(await db.getItems(req, model, query, user, originalUrl))
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
    const { user } = req
    const { originalUrl } = req
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.getItem(id, model, user, originalUrl))
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
    const { user } = req
    const { originalUrl } = req
    req = matchedData(req)
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
    const { user } = req
    const { originalUrl } = req
    req = matchedData(req)
    res.status(201).json(await db.createItem(req, model, user, originalUrl))
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
    const { user } = req
    const { originalUrl } = req
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.deleteItem(id, model, user, originalUrl))
    next()
  } catch (error) {
    utils.handleError(res, error)
  }
}
