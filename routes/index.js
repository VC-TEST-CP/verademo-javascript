const express = require('express');
const toolsController = require('../src-app/controllers/toolsController.js');
const homeController = require('../src-app/controllers/homeController.js');
const resetController = require('../src-app/controllers/resetController.js');
const blabController = require('../src-app/controllers/blabController.js');
const userController = require('../src-app/controllers/userController.js');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', homeController.renderGet);
//router.get('/reset', resetController.renderGet(req,res));
router.get('/test', userController.testFunc);

// router.post('/userlogin', function(req, res, next) {
  
//   //test
// } )
router.route('/login')
  .get(userController.showLogin)
  .post(userController.processLogin)

router.route('/register')
  .get(userController.showRegister)
  .post(userController.processRegister)

<<<<<<< HEAD
router.route('/feed')
  .get(userController.showLogin)
  .post(userController.processLogin)

router.route('/blabbers')
  .get(userController.showLogin)
  .post(userController.processLogin)

router.route('/profile')
  .get(userController.showLogin)
  .post(userController.processLogin)
=======
router.route('/register-finish')
  .get(userController.showRegisterFinish)
  .post(userController.processRegisterFinish)
>>>>>>> 6c194c20e3f05ad68111854b2dbd0d12cba9688d

router.route('/tools')
  .get(toolsController.showTools)
  .post(toolsController.processTools)

router.route('/reset')
  .get(userController.showLogin)
  .post(userController.processLogin)




module.exports = router;
