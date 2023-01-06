import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const inType = {
    id : { type: GraphQLString },
    name : { type: GraphQLString },
    email : { type: GraphQLString },
    userId : { type: GraphQLString },
    age : { type: GraphQLInt },
    // userId : String,
    // email : String,
    // name : String,
    // age : Number
}

// declare the user type.
const UserType = new GraphQLObjectType({
    name: 'user',
    fields: inType
    // fields: {
    //     id: {
    //         type: GraphQLString,
    //     },
    //     name: {
    //         type: GraphQLString
    //     },
    //     email: {
    //         type: GraphQLString
    //     },
    //     userId: {
    //         type: GraphQLString
    //     },
    //     age: {
    //         type: GraphQLInt
    //     }
    // }
})

export default UserType;