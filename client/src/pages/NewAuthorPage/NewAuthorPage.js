import React, {useState} from "react";
import { newAuthor } from "../../GraphQL/mutations";
import { useMutation } from "@apollo/client";
import "./NewAuthorPage.css"

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
    )
}