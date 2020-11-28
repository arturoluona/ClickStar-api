const mongoose = require('mongoose')
const { matchedData } = require('express-validator')
const auditoriaMethod = require('../models/auditoriaMethods')
const auditoriaGlobal = require('../models/auditoriaGlobal')
const auditoriaInv = require('../models/auditoriaInv')

const {
  buildSuccObject,
  buildErrObject,
  itemNotFound
} = require('../middleware/utils')
const { model } = require('../models/auditoriaMethods')

/**
 * Builds sorting
 * @param {string} sort - field to sort from
 * @param {number} order - order for query (1,-1)
 */
const buildSort = (sort, order) => {
  const sortBy = {}
  sortBy[sort] = order
  return sortBy
}

const auditGlobal = async (method, route, user, data = {}, before = {}) => {
  let send
  if(method === 'all') {
    send = {
      user,
      route,
      before: 'all',
      after: 'all',
    }
  }

  if(method === 'post') {
    send = {
      user,
      route,
      before: 'new',
      after: data,
    }
  }

  if(method === 'patch') {
    send = {
      user,
      route,
      before,
      after: data,
    }
  }

  if(method === 'get') {
    send = {
      user,
      route,
      before: 'get',
      after: data,
    }
  }

  if(method === 'delete') {
    send = {
      user,
      route,
      before: data,
      after: 'deleted',
    }
  }

  auditoriaGlobal.create(send, (err) => {
    if (err) {
      console.log(err.message)
    }
  })
}

/**
 * Hack for mongoose-paginate, removes 'id' from results
 * @param {Object} result - result object
 */
const cleanPaginationID = (result) => {
  result.docs.map((element) => delete element.id)
  return result
}

/**
 * Builds initial options for query
 * @param {Object} query - query object
 */
const listInitOptions = async (req) => {
  return new Promise((resolve) => {
    const order = req.query.order || -1
    const sort = req.query.sort || 'createdAt'
    const sortBy = buildSort(sort, order)
    const page = parseInt(req.query.page, 10) || 1
    const limit = parseInt(req.query.limit, 10) || 1000
    const options = {
      sort: sortBy,
      lean: true,
      page,
      limit
    }
    resolve(options)
  })
}

module.exports = {
  /**
   * Checks the query string for filtering records
   * query.filter should be the text to search (string)
   * query.fields should be the fields to search into (array)
   * @param {Object} query - query object
   */
  async checkQueryString(query) {
    return new Promise((resolve, reject) => {
      try {
        if (
          typeof query.filter !== 'undefined' &&
          typeof query.fields !== 'undefined'
        ) {
          const data = {
            $or: []
          }
          const array = []
          // Takes fields param and builds an array by splitting with ','
          const arrayFields = query.fields.split(',')
          // Adds SQL Like %word% with regex
          arrayFields.map((item) => {
            array.push({
              [item]: {
                $regex: new RegExp(query.filter, 'i')
              }
            })
          })
          // Puts array result in data
          data.$or = array
          resolve(data)
        } else {
          resolve({})
        }
      } catch (err) {
        console.log(err.message)
        reject(buildErrObject(422, 'ERROR_WITH_FILTER'))
      }
    })
  },

  /**
   * Auditar las consultas
   * @param {Object} req - query object
   */
  async auditoriaMethods(req) {
    try {
      const send = {
        user: (req.user) ? req.user : 'sin usuario',
        method: req.method,
        rute: req.originalUrl
      }
      auditoriaMethod.create(send, (err) => {
        if (err) {
          console.log(err.message)
        }
      })
    } catch (err) {
      console.log(err.message)
    }
  },

  async auditoriaInventory(req) {
    try {
      auditoriaInv.create(req, (err) => {
        if (err) {
          console.log(err.message)
        }
      })
    } catch (err) {
      console.log(err.message)
    }
  },

  /**
   * If user is admin search all ordenes with devices
   * If user is user search all ordenes by tecnico with devices
   * @param {Object} dataUser - query object
   * @param {Object} query - query object
   */
  getItemsOrdenByUser(model, query = {}, dataUser) {
    if (dataUser.role === 'tecnico') {
      query = {
        ...query,
        ...{
          $and: [{ tecnico: mongoose.Types.ObjectId(dataUser._id) }]
        }
      }
    }
    return model.aggregate([
      {
        $match: query
      }
    ])
  },

  /**
   * Get user for role
   * @param {Object} dataUser - query object
   * @param {Object} query - query object
   */
  getItemsUsers(model, query = {}, role) {
    if(role === 'user') {
      query = {
        ...query,
        ...{
          $and: [{ role }]
        }
      }
    }
    if(role === 'empleados') {
      query = {
        ...query,
        ...{
          $or: [
            { role: 'office' },
            { role: 'admin' },
            { role: 'tecnico' }
          ]
        }
      }
    }
    return model.aggregate([
      {
        $match: query
      }
    ])
  },

  /**
   * Gets items from database
   * @param {Object} req - request object
   * @param model
   * @param aggregate
   */
  async getItemsAggregate(req, model, aggregate) {
    const options = await listInitOptions(req)
    return new Promise((resolve, reject) => {
      model.aggregatePaginate(aggregate, options, (err, items) => {
        if (err) {
          reject(buildErrObject(422, err.message))
        }
        resolve(cleanPaginationID(items))
      })
    })
  },

  /**
   * Gets items from database
   * @param {Object} req - request object
   * @param {Object} query - query object
   */
  async getItems(req, model, query, user, route) {
    const options = await listInitOptions(req)
    if(!(req.originalUrl.toString().includes('pdf')))
      auditGlobal('all', route, user)
    return new Promise((resolve, reject) => {
      model.paginate(query, options, (err, items) => {
        if (err) {
          reject(buildErrObject(422, err.message))
        }
        resolve(cleanPaginationID(items))
      })
    })
  },

  /**
   * Gets item from database by id
   * @param {string} id - item id
   */
  async getItem(id, model, user = {}, route) {
    return new Promise((resolve, reject) => {
      model.findById(id, (err, item) => {
        itemNotFound(err, item, reject, 'NOT_FOUND')
        if(!(req.originalUrl.toString().includes('pdf')))
          auditGlobal('get', route, user, item)
        resolve(item)
      })
    })
  },

  /**
   * Creates a new item in database
   * @param {Object} req - request object
   */
  async createItem(req, model, user, route) {
    return new Promise((resolve, reject) => {
      model.create(req, (err, item) => {
        if (err) {
          reject(buildErrObject(422, err.message))
        }
        auditGlobal('post', route, user, item)
        resolve(item)
      })
    })
  },

  /**
   * Updates an item in database by id
   * @param {string} id - item id
   * @param {Object} req - request object
   */
  async updateItem(id, model, req, user, route) {
    const before = await model.findById(id)
    return new Promise((resolve, reject) => {
      model.findByIdAndUpdate(
        id,
        req,
        {
          new: true,
          runValidators: true
        },
        (err, item) => {
          itemNotFound(err, item, reject, 'NOT_FOUND')
          auditGlobal('patch', route, user, item, before)
          resolve(item)
        }
      )
    })
  },

  /**
   * Deletes an item from database by id
   * @param {string} id - id of item
   */
  async deleteItem(id, model, user, route) {
    model.findById(id, (err, item) => {
      itemNotFound(err, item, reject, 'NOT_FOUND')
      auditGlobal('delete', route, user, item)
    })
    return new Promise((resolve, reject) => {
      model.findByIdAndRemove(id, (err, item) => {
        itemNotFound(err, item, reject, 'NOT_FOUND')
        resolve(buildSuccObject('DELETED'))
      })
    })
  }
}
