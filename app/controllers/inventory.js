const model = require('../models/inventory')
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
    const { user, originalUrl } = req
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
    const { user, originalUrl } = req
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
    const { user, originalUrl } = req
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const response = await db.updateItem(id, model, req, user, originalUrl)
    res.status(200).json(response)
    const inv = {
      user,
      inventory: response,
      qty: response.stock
    }
    db.auditoriaInventory(inv)
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
    const response = await db.createItem(req, model, user, originalUrl)
    res.status(201).json(response)
    const inv = {
      user,
      action: 'add',
      inventory: response,
      qty: response.stock
    }
    db.auditoriaInventory(inv)
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
