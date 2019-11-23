//let exports = module.exports = {}
const models= require('../models');
const Goods= require('../models').goods;
const Category= require('../models').category;
exports.index = (req, res)=> {
    Goods.findAll({include: [Category]}).then((goods)=>{
        console.log(goods[0].category.name);
        res.render('home',{
            goods: goods
        });
    });
}