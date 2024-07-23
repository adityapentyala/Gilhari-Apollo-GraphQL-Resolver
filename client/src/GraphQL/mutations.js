import { gql } from "@apollo/client"

export const newAuthor = gql`
    mutation addAuthor($name: String!) {
        addAuthor(author: {Name: $name}) {
            ID
            Name
        }
    }
`

export const updateAuthorDetails = gql`
    mutation updateAuthor($id: Int!, $name: String) {
        updateAuthor(ID: $id, updations: {Name: $name}){
            ID
            Name
        }
    }
`

export const deleteAuthorDetails = gql`
    mutation deleteAuthor($id: Int!){
        deleteAuthor(ID: $id) {
            Name
        }
}
`

export const newBook = gql`
    mutation addBook($height: Int!, $auth_id: Int!, $genre:String!, 
        $subGenre: String!, $title: String!,$publisher: String!){
        addBook(book:{Auth_ID:$auth_id, Height:$height, Genre:$genre, 
        SubGenre: $subGenre, Publisher: $publisher, Title:$title}){
            ID
            Author{
            Name
            }
            Title
        }
    }
`

export const updateBookDetails = gql`
    mutation updateBook($id:Int!, $height: Int!, $auth_id: Int!, $genre:String!, 
        $subGenre: String!, $title: String!,$publisher: String!){
    updateBook(ID:$id, updations: {Auth_ID: $auth_id, Height: $height, Genre: $genre, 
        SubGenre:$subGenre, Title: $title, Publisher: $publisher}){
        Title
        ID
        Height
        Publisher
        Genre
        SubGenre
    }
}
`

export const deleteBookDetails = gql`
    mutation deleteBook($id: Int!){
    deleteBook(ID: $id) {
        Title
        Genre
    }
}
`