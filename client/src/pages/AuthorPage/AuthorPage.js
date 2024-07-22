import React, {useState} from "react";
import { updateAuthorDetails, deleteAuthorDetails } from "../../GraphQL/mutations";
import { useMutation } from "@apollo/client";
import "./AuthorPage.css"
import AuthorImage from './author.png'
import { useParams } from "react-router-dom";

export function AuthorPage({name}) {
    const [Name, setName] = useState("")
    const aID = parseInt(useParams().aID)
    console.log(aID)

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
        <div className="author-card">
            <img src={AuthorImage} alt={`${name} image`} className="author-image" />
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
                    value={name}
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
    )
}