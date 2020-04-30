const express = require('express')
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')

const {
  signupView,
  signupAdd,
  loginView,
  loginAdd,
  logout,
  profileView,
} = require('../controllers/auth')

//Sign up
router.get('/signup', ensureLoggedOut(), signupView)
router.post('/signup', ensureLoggedOut(), signupAdd)

//Login
router.get('/login', ensureLoggedOut(), loginView)
router.post('/login', ensureLoggedOut(), loginAdd)

//Profile
router.get('/profile', ensureLoggedIn('/login'), profileView)

//Logout
router.get('/logout', ensureLoggedIn('/login'), logout)

module.exports = router
