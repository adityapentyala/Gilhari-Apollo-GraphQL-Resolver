import axios from 'axios';
import { books } from './data/books.js';

const BASE_URL = 'http://localhost:80/gilhari/v1/'

var n_authors=1
var authors = new Map()

for (let index = 0; index <= 200; index++) {
    const book = books[index]
    //console.log(index)
    let a_id = n_authors
    if (!authors.has(book.Author)){
        n_authors+=1
        authors.set(book.Author, a_id)
        axios.post(BASE_URL+'Authors/', {
            "entity":{"ID":a_id, "Name": book.Author}
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
    } else {
        a_id = authors.get(book.Author)
    }
    const jsonBook = {"ID":index, "Title":book.Title, "Auth_ID":a_id, "Genre":book.Genre, "Height":book.Height,
        "SubGenre":book.SubGenre, "Publisher":book.Publisher
    }
    axios.post(BASE_URL+'Books/', {
        "entity":jsonBook
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
}

axios.get(BASE_URL+'Books/')
    .then(response => {
        // Access the response data
        const responseData = response.data;
        // Process the response data here
        console.log(responseData)
        return responseData
    })
    .catch(error => {
        // Handle any errors
        console.log(error)
    });

