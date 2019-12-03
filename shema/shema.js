const graphql = require('graphql');
const categoryController= require('../controllers/categoryController');
const goodsController = require('../controllers/goodsController');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt,GraphQLList,GraphQLNonNull,GraphQLBoolean } = graphql;



module.exports = new GraphQLSchema({
    query: Query,
    mutation:Mutation
});