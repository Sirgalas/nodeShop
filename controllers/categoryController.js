const models= require('../models');
const Category= models.category;
const Goods= models.goods;

exports.categories=(req,res)=>{
    Category.findAll({include:[Goods]}).then((categories)=>{
        console.log(categories[0]);
        res.render('./category/categories.pug',{
            categories: categories
        });
    })
};

exports.category=(req,res)=>{
    Category.findOne({
        where:{slug:req.params.slug},
        include:[Goods]
    }).then((category)=>{
        Category.findAll({include:[Goods]}).then((categories)=> {
            res.render('./category/category.pug', {
                category: category,
                categories:categories
            });
        });
    })
};