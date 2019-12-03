//let exports = module.exports = {}
const models= require('../models');
const Category= models.category;
const Goods= models.goods;
exports.index = (req, res)=> {
    Goods.findAll({include: [Category]}).then((goods)=>{
        res.render('./home/index.pug',{
            goods: goods
        });
    });
}
