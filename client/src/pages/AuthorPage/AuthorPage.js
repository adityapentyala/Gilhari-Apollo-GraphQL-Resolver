import React, {useState} from "react";
import { updateAuthorDetails, deleteAuthorDetails } from "../../GraphQL/mutations";
import { loadAuthors } from "../../GraphQL/queries";
import { useQuery, useMutation } from "@apollo/client";
import "./AuthorPage.css"
import AuthorImage from './author.png'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";

export function AuthorPage() {
    const aID = parseInt(useParams().aID)
    const {error, loading, data} = useQuery(loadAuthors, {
        variables:{
            id: aID,
        }
    });
    const [Name, setName] = useState("")
    useEffect(() => {
        if (data){
            console.log(data)
            setName(data.authors[0].Name);
        }
    }, [data]);
    console.log(aID, Name)

    const [updateAuthor, {updateError}] = useMutation(updateAuthorDetails)
    const [deleteAuthor, {deleteError}] = useMutation(deleteAuthorDetails)

    const update = () => {
        console.log(aID, Name)
        updateAuthor({
            variables:{
                id: aID,
                name: Name,
            },
        })
        if (updateError){
            console.log(updateError)
        }
    }

    const deleteFunction = () => {
        console.log(aID)
        deleteAuthor({
            variables:{
                id: aID
            }
        })
        if (deleteError){
            console.log(deleteError)
        }
    }

    return (
        <div>
            <Navbar />
            <h2 className="page-heading">Edit Author: {Name}</h2>
            <div className="content">
            <div className="author-card">
                <img src={AuthorImage} alt={`${Name} image`} className="author-image" />
                <div className="author-details-group">
                    <label htmlFor="id">ID: </label>
                    <input
                        type="number"
                        id="id"
                        value={aID}
                        disabled={true}
                    />
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={Name}
                        placeholder="Enter Author name"
                        onChange={(e)=> {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div className="buttons">
                    <button onClick={update} className="update-button">Update</button>
                    <button onClick={deleteFunction} className="delete-button">Delete</button>
                </div>
            </div>
            </div>
        </div>
    )
}