const controller = require('../controllers/auth')
const validate = require('../controllers/auth.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const db = require('../middleware/db')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

/*
 * Auth routes Routers
 */

/*
 * Register route
 */
router.post(
  '/register',
  trimRequest.all,
  validate.register,
  controller.register,
  db.auditoriaMethods
)

/*
 * Verify route
 */
router.post('/verify', trimRequest.all, validate.verify, controller.verify)

/*
 * Forgot password route
 */
router.post(
  '/forgot',
  trimRequest.all,
  validate.forgotPassword,
  controller.forgotPassword,
  db.auditoriaMethods
)

/*
 * Reset password route
 */
router.post(
  '/reset',
  trimRequest.all,
  validate.resetPassword,
  controller.resetPassword,
  db.auditoriaMethods
)

/*
 * Get new refresh token
 */
router.get(
  '/token',
  requireAuth,
  AuthController.roleAuthorization(['user', 'admin']),
  trimRequest.all,
  controller.getRefreshToken,
  db.auditoriaMethods
)

/*
 * Login route
 */
router.post(
  '/login', 
  trimRequest.all, 
  validate.login, 
  controller.login,
  db.auditoriaMethods
)

module.exports = router
