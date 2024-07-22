import { gql } from "@apollo/client"

export const newAuthor = gql`
    mutation addAuthor($name: String!) {
        addAuthor(author: {Name: $name}) {
            ID
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