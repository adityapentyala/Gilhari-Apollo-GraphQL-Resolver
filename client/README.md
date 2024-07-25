# Apollo Client Frontend 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting the Client

To start the client, in the project root directory, you can run:
### `npm run start-client`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

## Functionalities
The client exposes a minimal React site at http://localhost:3000 where users may perform CRUD operations on the `Book` and `Author` data in the SQLite database. \
Currently, the following routes and pages are present:
### http://localhost:3000/ (root)
Renders the Homepage 
### http://localhost:3000/books?query=
Renders the BooksPage that displays all books with titles/author names matching the search query
### http://localhost:3000/newBook
Renders the AddBookPage that allows one to add a new book
### http://localhost:3000/books/{bid}
Renders the edit page for a book with ID `bid`
### http://localhost:3000/authors?query=
Renders the AuthorsPage that displays all authors with names matching the search query
### http://localhost:3000/newAuthor
Renders the AddAuthorPage that allows one to add a new author
### http://localhost:3000/authors/{aid}
Renders the edit page for an auther with ID `aid`