// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    ID: Int,
    Title: String,
    Author: String,
    Genre: String,
    SubGenre: String,
    Height: Int,
    Publisher: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(ID: Int, Height: Int,Author: String, Genre: String, SubGenre: String, Publisher: String, Title: String): [Book],
    #employee: [Employee]
  }

  type Mutation {
    addBook(book: AddBookInput): Book
    deleteBook(ID: ID!): [Book]
  }

  input AddBookInput {
    Title: String!
    Author: String!
    Genre: String!
    SubGenre: String!
    Publisher: String!
    Height: Int!
  }
`;