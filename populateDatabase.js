import axios from 'axios';
import { books } from './data/books.js';

const BASE_URL = 'http://localhost:80/gilhari/v1/'

for (let index = 0; index <= 200; index++) {
    const book = books[index]
    //console.log(index)
    const jsonBook = {"ID":index, "Title":book.Title, "Author":book.Author, "Genre":book.Genre, "Height":book.Height,
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
    })
    .catch(error => {
        // Handle any errors
        console.log(error)
    });

