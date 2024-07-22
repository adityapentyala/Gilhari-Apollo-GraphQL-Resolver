import React, {useEffect, useState} from "react";
import {gql, useQuery} from "@apollo/client";
import {loadAuthors} from "../../GraphQL/queries.js"
import { AuthorCard } from "../AuthorCard/AuthorCard.js";
import './GetAuthors.css'

export function GetAuthors(){
    const {error, loading, data} = useQuery(loadAuthors);
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        if (data){
            console.log(data)
            setAuthors(data.authors);
        }
    }, [data]);
    console.log(authors);
    return (
        <div className="authors-grid">{
            authors.map((author, index)=> {
                console.log(author)
                return (<div>
                    <AuthorCard key={index} name={author.Name} ID={author.ID}/>
                </div>)
            }
        )}
        </div>
    );
}