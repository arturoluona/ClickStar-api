const controller = require('../controllers/pdf')
const AuthController = require('../controllers/auth')
const validate = require('../controllers/deviceMonitor.validate')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

/*
 * PDF routes
 */

router.get(
  '/auditoriaMethods',
  trimRequest.all,
  controller.auditoriaMethods
)

router.get(
  '/auditoriaGlobal',
  trimRequest.all,
  controller.auditoriaGlobal
)

router.get(
  '/auditoriaInv',
  trimRequest.all,
  controller.auditoriaInventory
)

// requireAuth,
// AuthController.roleAuthorization(['admin', 'office', 'tecnico', 'user']),
router.get(
  '/deviceMonitor/:id',
  trimRequest.all,
  validate.getItem,
  controller.deviceMonit
)

router.get(
  '/deviceRouter/:id',
  trimRequest.all,
  validate.getItem,
  controller.deviceRoute
)

router.get(
  '/devicePrinter/:id',
  trimRequest.all,
  validate.getItem,
  controller.devicePrint
)

router.get(
  '/devicePc/:id',
  trimRequest.all,
  validate.getItem,
  controller.devicePC
)

router.get(
  '/deviceOthers/:id',
  trimRequest.all,
  validate.getItem,
  controller.deviceOther
)

router.get(
  '/orden',
  trimRequest.all,
  controller.orden
)

router.get(
  '/orden/:id',
  trimRequest.all,
  validate.getItem,
  controller.ordenId
)

module.exports = router
