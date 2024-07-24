import React from "react";
import { GetAuthors } from "../../components/GetAuthors/GetAuthors.js";
import './AuthorsPage.css'
import { Navbar } from "../../components/Navbar/Navbar";

export function AuthorsPage(){
    return(
        <div>
            <Navbar />
            <div>
                <h1 className="page-heading">Gilhari Library: Authors</h1>
                <GetAuthors />
            </div>
        </div>
    )
}