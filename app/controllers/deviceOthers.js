const model = require('../models/deviceOthers')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const serviceDevice = require('../services/devices')
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
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await serviceDevice.getItem(id, model))
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
    const { user, originalUrl } = req
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
    res.status(200).json(await serviceDevice.getItem(id, model))
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
