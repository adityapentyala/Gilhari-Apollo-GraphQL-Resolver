import React, {useEffect, useState} from "react";
import {gql, useQuery} from "@apollo/client";
import {loadAuthors} from "../../GraphQL/queries.js"
import { AuthorCard } from "../AuthorCard/AuthorCard.js";
import './GetAuthors.css'
import { useSearchParams } from "react-router-dom";

export function GetAuthors(){
    const {error, loading, data} = useQuery(loadAuthors);
    const [authors, setAuthors] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get("query")
    console.log(searchQuery)

    useEffect(() => {
        if (data){
            //console.log(data)
            setAuthors(data.authors);
        }
    }, [data]);
    //console.log(authors);
    return (
        <div className="authors-grid">{
            authors.map((author, index)=> {
                //console.log(author)
                if (author.Name.toLowerCase().includes(searchQuery) || !searchQuery) {
                    return (
                    <div>
                        <AuthorCard key={index} name={author.Name} ID={author.ID}/>
                    </div>
                    )
                }
            }
        )}
        </div>
    );
}