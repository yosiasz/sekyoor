const graphql = require('graphql');

//destructure
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} = graphql;

const FunctionType = new GraphQLObjectType({
    name: 'Functions',
    fields:() => ({
        id: {type: GraphQLID},
        functioncode: {type:GraphQLString},
        functioname: {type:GraphQLString},
    })
});


module.exports = {
    FunctionType: FunctionType
};