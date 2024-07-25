import React from "react";
import { GetAuthors } from "../../components/GetAuthors/GetAuthors.js";
import './AuthorsPage.css'
import { Navbar } from "../../components/Navbar/Navbar";
import { Searchbar } from "../../components/Searchbar/Searchbar.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function AuthorsPage(){
    const [Search, updateSearch] = useState("")
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (shouldNavigate) {
          navigate(`/authors?query=${Search}`);
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
                    <h1 className="page-heading">Authors</h1>
                </div>
                <div className="search-group">
                    <Searchbar search={Search} updateSearch={updateSearch} submitSearch={handleSubmitSearch}/>
                    <a href='/newAuthor'>
                        <button className="new-button">New Author</button>
                    </a>
                </div>
                <GetAuthors searchString={Search}/>
            </div>
        </div>
    )
}