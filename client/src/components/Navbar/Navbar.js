import React from "react";
import "./Navbar.css"

export function Navbar() {
    return(
        <div className="nav">
            <a href="/" className="logo">Gilhari Library</a>
            <ul>
                <li>
                    <a href="/books" className="path">Books</a>
                </li>
                <li>
                    <a href="/authors" className="path">Authors</a>
                </li>
            </ul>
        </div>
    )
}