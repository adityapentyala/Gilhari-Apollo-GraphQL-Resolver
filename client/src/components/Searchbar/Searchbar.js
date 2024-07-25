import React from "react";
import './Searchbar.css'
import { useState } from "react";

export function Searchbar({ search, updateSearch, submitSearch }){
    const submit = (e) => {
        e.preventDefault()
        submitSearch(e)
    }
    return(
        <div className="searchbar">
            <label htmlFor="search">Search: </label>
            <input id="search" className="search-input"
            onChange={(e) => updateSearch(e.target.value)}
            type="string"
            />
            <button id="search" className="search-button" onClick={submit}>
            &#x1F50E;
            </button>
        </div>
    )
}