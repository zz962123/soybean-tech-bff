import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from 'graphql';
import { getAllUsers, getUserById, getUserByUsername } from '../resolvers/user-resolver.js';
import UserType from '../types/user.js';
// import UserInterface from '../../interface/UserInterface.js';


// declare the queries with the resolvers
const RootQueries = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType), // return type
            resolve: () => {
                return getAllUsers();
            }
        },
        getUserById: {
            type: UserType, // return type
            args: { // input args
                userId: {
                    type: GraphQLString
                }
            },
            resolve: (_Îsource, args) => {
                const { userId } = args;
                return getUserById(userId);
            }
        },
        getUserByUsername: {
            type: UserType,
            args: {
                username: {
                    type: GraphQLString
                },
            },
            resolve: (_source, args) => {
                const { username } = args;
                return getUserByUsername(username);
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: RootQueries,
    types: [
        UserType
    ]
})

export default schema;