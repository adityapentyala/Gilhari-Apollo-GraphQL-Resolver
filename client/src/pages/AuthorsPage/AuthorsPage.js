import React from "react";
import { GetAuthors } from "../../components/GetAuthors/GetAuthors.js";
import './AuthorsPage.css'

export function AuthorsPage(){
    return(
        <div>
            <h1 className="page-heading">Gilhari Library: Authors</h1>
            <GetAuthors />
        </div>
    )
}