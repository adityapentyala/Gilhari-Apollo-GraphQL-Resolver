import React from "react";
import './HomePage.css';
import { Navbar } from "../../components/Navbar/Navbar";

export function HomePage(){
    return (
        <div>
            <Navbar />
            <div className="heading-group">
                <h1 className="page-heading">Welcome to Gilhari Library!</h1>
                <p className="about">
                    Gilhari library is a full-stack project that uses a Gilhari® microservice to serve as a resolver
                    for an ApolloServer GraphQL backend that persists and retrieves data from an SQLite database. 
                    The frontend is written in React using ApolloClient. The webapp is fully functional and allows one to
                    leverage the CRUD operations implemented by the Gilhari REST API resolver functions. Navigate to 
                    /Books or /Authors in the navbar to view the list of objects. View the update/delete screen by clicking on
                    any card. One can search books by title/author or authors by name. Add new books/authors using their 
                    respective buttons under the search. 
                </p>
            </div>
        </div>
    )
}