const express = require('express');
const { signupUser, loginUser, homePage } = require('../controllers/authController');
const { sendOTP, verifyOTP } = require('../controllers/authController');


const router = express.Router();

// Landing Page
router.get('/', (req, res) => {
  res.render('index');
});

// Signup Page
router.get('/signup', (req, res) => {
  res.render('signup');
});
router.post('/signup', signupUser);

// Login Page
router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', loginUser);

// Home Page
router.get('/home', homePage);

// logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/home');
    }
    res.clearCookie('sid');
    res.redirect('/login');
  });
});

//forgot password
router.get('/forgot-password', (req, res) => {
  res.render('forgot-password');
});

//otp 


router.post('/verify-otp', verifyOTP);

module.exports = router;
