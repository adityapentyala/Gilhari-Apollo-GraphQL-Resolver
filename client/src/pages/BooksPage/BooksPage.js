import React from "react";
import { GetBooks } from "../../components/GetBooks/getBooks.js";
import './BooksPage.css'
import { Navbar } from "../../components/Navbar/Navbar";

export function BooksPage(){
    return(
        <div>
        <Navbar />
        <div>
            <h1 className="page-heading">Gilhari Library</h1>
            <GetBooks />
        </div>
        </div>
    )
}