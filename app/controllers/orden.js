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
exports.getItems = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    const aggregation = db.getItemsOrdenByUser(model, query, req.user)
    res.status(200).json(await db.getItemsAggregate(req, model, aggregation))
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
    const response = await serviceOrder.getItem(id, model)
    response.customer = {
      name: response.customer[0].name,
      email: response.customer[0].email,
      phone: response.customer[0].phone,
      ci: response.customer[0].ci,
      role: response.customer[0].role
    }
    response.tecnico = {
      name: response.tecnico[0].name,
      email: response.tecnico[0].email,
      phone: response.tecnico[0].phone,
      ci: response.tecnico[0].ci,
      role: response.tecnico[0].role
    }
    res.status(200).json(response)
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.updateItem = async (req, res) => {
  try {
    req = matchedData(req)
    req.historic = {
      status: req.status
    }
    req.device = {
      _id: new mongoose.Types.ObjectId(req.device._id),
      label: req.device
    }
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.updateItem(id, model, req))
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async (req, res) => {
  try {
    req = matchedData(req)
    req.historic = {
      status: req.status
    }
    req.device = {
      _id: new mongoose.Types.ObjectId(req.device._id),
      label: req.device
    }
    res.status(201).json(await db.createItem(req, model)) //
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
    res.status(200).json(await db.deleteItem(id, model))
  } catch (error) {
    utils.handleError(res, error)
  }
}
