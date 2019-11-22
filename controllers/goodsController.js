//let exports = module.exports = {}
const models= require('../models');
exports.index = (req, res)=> {
    models.goods.findAll({include: ['days']}).then((goods)=>{

        for (val in goods){
            console.log(val.category);
        }
        res.render('home',{
            goods: goods
        });
    });
}