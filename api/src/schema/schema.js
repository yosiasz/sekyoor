const graphql = require('graphql');
const { getFunctions } = require('../queries/queries');
const { FunctionType } = require('../types/types');

let assets = [];

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql;


//root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        functions:{
            type: GraphQLList(FunctionType),
            resolve(parentValue, args){
                functions = getFunctions();
                return functions;
            }
        }                  
    }

});

module.exports = new  GraphQLSchema({
    query: RootQuery
});