import React from "react";
import './BookCard.css'
import bookCover from './book.png'

export function BookCard({title, author}) {
    return (<div className="book-card">
        <img src={bookCover} alt={`${title} cover`} className="book-image" />
        <div className="book-details">
            <h3>{title}</h3>
            <p><i>{author}</i></p>
        </div>
    </div>)
}