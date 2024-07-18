import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { GetBooks } from './components/GetBooks/getBooks.js'

const errorLink = onError(({graphqlErrors, networkErrors}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`GraphQL error ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({"uri":"http://localhost:4000/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <h1 className='App'>Gilhari Library</h1>
      <GetBooks />
    </ApolloProvider>
  );
}

export default App;
