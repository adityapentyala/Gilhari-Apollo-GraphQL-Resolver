import React from "react";
import './BookCard.css'
import bookCover from './book.png'
import { Link } from "react-router-dom";

export function BookCard({title, author, ID, authID}) {
    return (<div className="book-card">
        <img src={bookCover} alt={`${title} cover`} className="book-image" />
        <div className="book-details">
            <Link to={`/books/${ID}`} className="book-title">{title}</Link>
            <div>
                <Link to={`/authors/${authID}`} className="book-author"><i>{author}</i></Link>
            </div>
        </div>
    </div>)
}