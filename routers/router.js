'use strict';

const express	 	= require('express');
const router 		= express.Router();

const goodsController = require('../controllers/indexController');
const categoryController = require('../controllers/categoryController');

router.get('/',  goodsController.index);

router.get('/categories',categoryController.categories);

router.get("/category/:slug",(req, res) => {categoryController.category(req,res)});

module.exports = router;