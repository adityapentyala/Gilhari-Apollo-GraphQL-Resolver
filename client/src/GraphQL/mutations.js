import { gql } from "@apollo/client"

export const newAuthor = gql`
    mutation addAuthor($name: String!) {
        addAuthor(author: {Name: $name}) {
            ID
            Name
        }
    }
`