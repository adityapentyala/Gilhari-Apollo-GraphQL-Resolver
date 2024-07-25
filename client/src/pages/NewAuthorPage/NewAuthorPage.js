import React, {useState} from "react";
import { newAuthor } from "../../GraphQL/mutations";
import { useMutation } from "@apollo/client";
import "./NewAuthorPage.css"
import { Navbar } from "../../components/Navbar/Navbar";

export function NewAuthorPage(){
    const [Name, setName] = useState("")

    const [addAuthor, {error}] = useMutation(newAuthor)

    const submit = () => {
        console.log(Name)
        addAuthor({
            variables:{
                name: Name,
            },
        })
        if (error){
            console.log(error.networkError.result.error)
        }
    }

    return (
        <div>
        <Navbar />
        <div className="heading-group">
            <h1 className="page-heading">New Author</h1>
        </div>
        <div className="author-input-card">
            <div className="author-input-group">
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter Author name"
                    onChange={(e)=> {
                        setName(e.target.value)
                    }}
                />
            </div>
            <button onClick={submit} className="submit-button">Submit</button>
        </div>
        </div>
    )
}