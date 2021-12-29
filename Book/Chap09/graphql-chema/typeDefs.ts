import { gql } from "apollo-server-express";

/*
 - Il punto esclamativo indica che non può
   essere nullo
 - ID -> è una parola chiave, indica un GUID
*/

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String
    }
    type Todo {
        id: ID!
        title: String!
        description: String
    }
    type Query {
        getUser(id: ID): User
        getTodos: [Todo!]
    }
    type Mutation {
        addTodo(title: String!, description: String): Todo
    }
`;

export default typeDefs;