import React from "react";
import './AuthorCard.css'
import AuthorImage from './author.png'

export function AuthorCard({name}) {
    return (<div className="author-card">
        <img src={AuthorImage} alt={`${name} image`} className="author-image" />
        <div className="author-details">
            <h3>{name}</h3>
        </div>
    </div>)
}