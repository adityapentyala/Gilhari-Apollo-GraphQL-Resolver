import { gql } from "@apollo/client"

export const loadBooks = gql`
    query {
        books{
            ID
            Title
            Author{
                Name
            }
            Genre
            SubGenre
        }
    }
`

export const loadAuthors = gql`
    query authors($id: Int, $name: String){
        authors(ID: $id, Name: $name){
            ID
            Name
        }
    }
`

