import React, {useState} from "react";
import { updateBookDetails, deleteBookDetails } from "../../GraphQL/mutations";
import { loadBooks, loadAuthors } from "../../GraphQL/queries";
import { useQuery, useMutation } from "@apollo/client";
import "./BookPage.css"
import BookImage from './book.png'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";

export function BookPage() {
    const bID = parseInt(useParams().bID)
    const {error, loading, data} = useQuery(loadBooks, {
        variables:{
            id: bID,
        }
    });
    const [Title, setTitle] = useState("")
    const [AuthID, setAuthID] = useState("")
    const [Genre, setGenre] = useState("")
    const [subGenre, setsubGenre] = useState("")
    const [Height, setHeight] = useState("")
    const [Publisher, setPublisher] = useState("")
    const [AuthName, setAuthName] = useState("")
    useEffect(() => {
        if (data){
            console.log(data)
            setTitle(data.books[0].Title);
            setAuthID(data.books[0].AuthID);
            setGenre(data.books[0].Genre);
            setsubGenre(data.books[0].SubGenre);
            setHeight(data.books[0].Height);
            setPublisher(data.books[0].Publisher)
            setAuthName(data.books[0].Author.Name)
        }
    }, [data]);
    

    const [updateBook, {updateError}] = useMutation(updateBookDetails)
    const [deleteBook, {deleteError}] = useMutation(deleteBookDetails)

    const update = () => {
        console.log()
        updateBook({
            variables:{
                id: bID,
                title: Title,
                genre: Genre,
                subGenre: subGenre,
                publisher: Publisher,
                height: Height,
                auth_id: AuthID
            },
        })
        if (updateError){
            console.log(updateError)
        }
    }

    const deleteFunction = () => {
        deleteBook({
            variables:{
                id: bID
            }
        })
        if (deleteError){
            console.log(deleteError)
        }
    }

    return (
        <div>
        <Navbar />
        <div className="book-card">
            <img src={BookImage} alt={`${Title} image`} className="book-image" />
            <div className="book-details-group">
                <label htmlFor="id">ID: </label>
                <input
                    type="number"
                    id="id"
                    value={bID}
                    disabled={true}
                />
                <label htmlFor="Title">Title: </label>
                <input
                    type="text"
                    id="Title"
                    placeholder="Enter Book Title"
                    value={Title}
                    onChange={(e)=> {
                        setTitle(e.target.value);
                    }}
                />
                <label htmlFor="AuthID">Author ID: </label>
                <input
                    type="number"
                    id="AuthID"
                    placeholder="Enter Author ID"
                    value={AuthID}
                    onChange={(e)=> {
                        setAuthID(parseInt(e.target.value));
                    }}
                />
                <label htmlFor="AuthName">Author Name: </label>
                <input
                    type="text"
                    id="AuthName"
                    value={AuthName}
                    disabled={true}
                />
                <label htmlFor="Genre">Genre: </label>
                <input
                    type="text"
                    id="Genre"
                    placeholder="Enter Genre"
                    value={Genre}
                    onChange={(e)=> {
                        setGenre(e.target.value);
                    }}
                />
                <label htmlFor="subGenre">Subgenre: </label>
                <input
                    type="text"
                    id="subGenre"
                    placeholder="Enter Subgenre"
                    value={subGenre}
                    onChange={(e)=> {
                        setsubGenre(e.target.value);
                    }}
                />
                <label htmlFor="Height">Height: </label>
                <input
                    type="number"
                    id="Height"
                    placeholder="Enter Height"
                    value={Height}
                    onChange={(e)=> {
                        setHeight(parseInt(e.target.value));
                    }}
                />
                <label htmlFor="Publisher">Publisher: </label>
                <input
                    type="text"
                    id="Publisher"
                    placeholder="Enter Publisher"
                    value={Publisher}
                    onChange={(e)=> {
                        setPublisher(e.target.value);
                    }}
                />
            </div>
            <div className="buttons">
                <button onClick={update} className="update-button">Update</button>
                <button onClick={deleteFunction} className="delete-button">Delete</button>
            </div>
        </div>
        </div>
    )
}