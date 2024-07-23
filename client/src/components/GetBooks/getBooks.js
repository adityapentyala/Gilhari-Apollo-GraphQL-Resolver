import React, {useEffect, useState} from "react";
import {gql, useQuery} from "@apollo/client";
import {loadBooks} from "../../GraphQL/queries.js"
import { BookCard } from "../BookCard/BookCard.js";
import "./GetBooks.css";

export function GetBooks(){
    const {error, loading, data} = useQuery(loadBooks);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        if (data){
            //console.log(data.books[0].Author.Name)
            //console.log(typeof data)
            setBooks(data.books);
        }
    }, [data]);
    console.log(books);
    return (
        <div className="books-grid">{
            books.map((book, index)=> {
                console.log(book)
                return (<div>
                    <BookCard key={index} title={book.Title} author={book.Author.Name} 
                    ID={book.ID} authID={book.Author.ID}>
                    </BookCard>
                </div>)
            }
        )}
        </div>
    );
}