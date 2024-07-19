import React from "react";
import { GetBooks } from "../../components/GetBooks/getBooks.js";
import './BooksPage.css'

export function BooksPage(){
    return(
        <div>
            <h1 className="page-heading">Gilhari Library</h1>
            <GetBooks />
        </div>
    )
}