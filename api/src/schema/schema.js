const graphql = require('graphql');
const { getFunctions } = require('../queries/queries');
const { FunctionType } = require('../types/types');

let nistfunctions = [];

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
        nistfunctions:{
            type: new GraphQLList(FunctionType),
            resolve(parentValue, args){
                nistfunctions = getFunctions();
                return nistfunctions;
            }
        }                  
    }

});

module.exports = new  GraphQLSchema({
    query: RootQuery
});