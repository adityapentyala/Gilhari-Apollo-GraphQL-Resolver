import React, {useEffect} from "react";
import {gql, useQuery} from "@apollo/client";
import {loadBooks} from "../GraphQL/queries.js"



export function GetBooks(){
    const {error, loading, data} = useQuery(loadBooks)
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div></div>
    );
}