//let exports = module.exports = {}
const models= require('../models');
const Category= models.category;
exports.index = (req, res)=> {
    models.goods.findAll({include: [Category]}).then((goods)=>{
        console.log(goods[0].Category);
        res.render('home',{
            goods: goods
        });
    });
}