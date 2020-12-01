const controller = require('../controllers/orden')
const validate = require('../controllers/orden.validate')
const AuthController = require('../controllers/auth')
const db = require('../middleware/db')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

/*
 * orden routes
 */

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  AuthController.roleAuthorization(['admin', 'office', 'tecnico']),
  trimRequest.all,
  controller.getItems,
  db.auditoriaMethods
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  AuthController.roleAuthorization(['admin', 'office']),
  trimRequest.all,
  validate.createItem,
  controller.createItem,
  db.auditoriaMethods
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin', 'office', 'tecnico']),
  trimRequest.all,
  validate.getItem,
  controller.getItem,
  db.auditoriaMethods
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin', 'office', 'tecnico']),
  trimRequest.all,
  validate.updateItem,
  controller.updateItem,
  db.auditoriaMethods
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.deleteItem,
  controller.deleteItem,
  db.auditoriaMethods
)

module.exports = router
