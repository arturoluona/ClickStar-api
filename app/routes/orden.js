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
 * Get items deleted
 */
router.get(
  '/deletedAll',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  controller.getItemsDeleted
)

/*
 * Get item deleted
 */
router.get(
  '/deleted/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.getItem,
  controller.getItemDeleted
)

/*
 * Restore item deleted
 */
router.get(
  '/restore/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.getItem,
  controller.restoreItem
)

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
 * Get items route
 */
router.get(
  '/id-order/:id',
  trimRequest.all,
  validate.getItem,
  controller.getItemsSearch
)

/*
 * Get items route
 */
router.get(
  '/ci/:id',
  trimRequest.all,
  validate.getItem,
  controller.getItemsByCi
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
