import React from "react";
import './HomePage.css';
import { Navbar } from "../../components/Navbar/Navbar";
import { Searchbar } from "../../components/Searchbar/Searchbar";

export function HomePage(){
    return (
        <div>
            <Navbar />
            <Searchbar />
        </div>
    )
}