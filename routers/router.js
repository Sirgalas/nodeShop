'use strict';

const express	 	= require('express');
const router 		= express.Router();
//let app = express();
var goodsController = require('../controllers/goodsController');
router.get('/',  goodsController.index);

module.exports = router;