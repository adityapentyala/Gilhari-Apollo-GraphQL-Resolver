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