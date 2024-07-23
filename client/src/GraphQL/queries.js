import { gql } from "@apollo/client"

export const loadBooks = gql`
    query books($height: Int,$genre:String, $subGenre: String, $id:Int, $authId: Int, $publisher: String, $title: String){
        books(Height:$height, Genre:$genre, SubGenre: $subGenre, ID:$id, Auth_ID: $authId, Title:$title, Publisher: $publisher){
            ID
            Title
            Author{
                ID
                Name
            }
            Genre
            SubGenre
            Height
            Publisher
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

