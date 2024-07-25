import React from "react";
import './AuthorCard.css'
import AuthorImage from './author.png'
import { Link } from "react-router-dom";

export function AuthorCard({ID, name}) {
    return (
    <div className="author-card">
        <img src={AuthorImage} alt={`${name} image`} className="author-image" />
        <div className="author-details">
            <Link to={`/authors/${ID}`} className="author-name">{name}</Link>
        </div>
    </div>
    )
}