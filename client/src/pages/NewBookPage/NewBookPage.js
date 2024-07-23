import React, {useState} from "react";
import { newBook } from "../../GraphQL/mutations";
import { useMutation } from "@apollo/client";
import "./NewBookPage.css"

export function NewBookPage(){
    const [Title, setTitle] = useState("")
    const [AuthID, setAuthID] = useState("")
    const [Genre, setGenre] = useState("")
    const [subGenre, setsubGenre] = useState("")
    const [Height, setHeight] = useState("")
    const [Publisher, setPublisher] = useState("")

    const [addBook, {error}] = useMutation(newBook)

    const submit = () => {
        //console.log(Height, AuthID, Genre, subGenre, Title, Publisher)
        addBook({
            variables:{
                height: Height, 
                auth_id: AuthID, 
                genre:Genre, 
                subGenre: subGenre, 
                title: Title,
                publisher: Publisher
            },
        })
        if (error){
            console.log(error)
        }
    }

    return (
        <div className="book-input-card">
            <div className="book-input-group">
                <label htmlFor="Title">Title: </label>
                <input
                    type="text"
                    id="Title"
                    placeholder="Enter Book Title"
                    onChange={(e)=> {
                        setTitle(e.target.value);
                    }}
                />
                <label htmlFor="AuthID">Author ID: </label>
                <input
                    type="number"
                    id="AuthID"
                    placeholder="Enter Author ID"
                    onChange={(e)=> {
                        setAuthID(parseInt(e.target.value));
                    }}
                />
                <label htmlFor="Genre">Genre </label>
                <input
                    type="text"
                    id="Genre"
                    placeholder="Enter Genre"
                    onChange={(e)=> {
                        setGenre(e.target.value);
                    }}
                />
                <label htmlFor="subGenre">Subgenre: </label>
                <input
                    type="text"
                    id="subGenre"
                    placeholder="Enter Subgenre"
                    onChange={(e)=> {
                        setsubGenre(e.target.value);
                    }}
                />
                <label htmlFor="Height">Height: </label>
                <input
                    type="number"
                    id="Height"
                    placeholder="Enter Height"
                    onChange={(e)=> {
                        setHeight(parseInt(e.target.value));
                    }}
                />
                <label htmlFor="Publisher">Publisher: </label>
                <input
                    type="text"
                    id="Publisher"
                    placeholder="Enter Publisher"
                    onChange={(e)=> {
                        setPublisher(e.target.value);
                    }}
                />
            </div>
            <button onClick={submit} className="submit-button">Submit</button>
        </div>
    )
}