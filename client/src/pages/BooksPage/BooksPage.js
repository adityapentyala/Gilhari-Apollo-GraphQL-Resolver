import React from "react";
import { GetBooks } from "../../components/GetBooks/getBooks.js";
import './BooksPage.css'
import { Navbar } from "../../components/Navbar/Navbar";
import { Searchbar } from "../../components/Searchbar/Searchbar.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export function BooksPage(){
    const [Search, updateSearch] = useState("")
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (shouldNavigate) {
          navigate(`/books?query=${Search}`);
          setShouldNavigate(false);
          updateSearch("");
        }
      }, [shouldNavigate, Search, navigate]);

    const handleSubmitSearch = () => {
        setShouldNavigate(true)
    }

    return(
        <div>
        <Navbar />
        <div>
            <div className="heading-group">
                <h1 className="page-heading">Books</h1>
            </div>
            <div className="search-group">
                <Searchbar search={Search} updateSearch={updateSearch} submitSearch={handleSubmitSearch}/>   
                <a href='/newBook'>
                    <button className="new-button">New Book</button>
                </a>
            </div>
            <GetBooks />
        </div>
        </div>
    )
}