// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    ID: Int,
    Title: String,
    Auth_ID: Int,
    Genre: String,
    SubGenre: String,
    Height: Int,
    Publisher: String,
    Author: Author
  }

  type Author{
    ID: Int,
    Name: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(ID: Int, Height: Int,Author: String, Genre: String, SubGenre: String, Publisher: String, Title: String): [Book],
    authors(ID: Int, Name: String): [Author]
  }

  type Mutation {
    addBook(book: AddBookInput): Book
    deleteBook(ID: Int!): [Book]
    updateBook(ID: Int!, updations: EditBookInput): [Book]
    addAuthor(author: AddAuthorInput): Author
    updateAuthor(ID: Int!, updations: EditAuthorInput): [Author]
    deleteAuthor(ID: Int!): [Author]
  }

  input AddBookInput {
    Title: String!
    Auth_ID: Int!
    Genre: String!
    SubGenre: String!
    Publisher: String!
    Height: Int!
  }

  input EditBookInput {
    Title: String
    Auth_ID: Int
    Genre: String
    SubGenre: String
    Publisher: String
    Height: Int
  }

  input AddAuthorInput {
    Name: String!
  }

  input EditAuthorInput {
    Name: String
  }
`;