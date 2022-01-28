const graphql = require('graphql');

//destructure
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt
} = graphql;

const FunctionType = new GraphQLObjectType({
    name: 'Functions',
    fields:() => ({
        functioncode: {type:GraphQLString},
        functionname: {type:GraphQLString},
        sortOrder: {type:GraphQLInt}
    })
});


module.exports = {
    FunctionType: FunctionType
};