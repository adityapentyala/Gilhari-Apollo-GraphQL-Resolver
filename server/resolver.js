import axios from 'axios'

const BASE_URL = 'http://localhost:80/gilhari/v1/'

/*const operationDetailsObject = {
  "operationDetails": [
    {
      "opType":"filters",
      "predicates": [
        {
        "type":"Books",
        "predicate":"ID=23"
        }
      ],
    },
  ]
}*/

export const resolvers = {
    Query: {
      books(_, args){
        console.log(args)
        return gilhariAPIGet("Books", args)
      },
      authors(_, args){
        console.log(args)
        return gilhariAPIGet("Authors", args)
      }
    },

    Mutation: {
      addBook(_, args){
        return gilhariAPIPost("Books", "book", args)
      },
      updateBook(_, args){
        return gilhariAPIPatch("Books", args)
      },
      deleteBook(_, args){
        return gilhariAPIDelete("Books", args)
      },
      addAuthor(_, args){
        return gilhariAPIPost("Authors", "author", args)
      },
      updateAuthor(_, args){
        return gilhariAPIPatch("Authors", args)
      },
      deleteAuthor(_, args){
        return gilhariAPIDelete("Authors", args)
      }
    }
  };

/**
 * Returns the string of filters to be appended to the URI 
 * @param {object} args List of conditions on fields of the object being queried
 * @returns {String}
 */
function getFilterString(args) {
  const keys = Object.keys(args)
  if (keys.length==0){
    return ""
  }
  var filterString="?filter="
  for (var i=0; i<keys.length; i++){
    if (i!=0){
      filterString+="+AND+"
    }
    const val= args[keys[i]]
    if (typeof val === 'string'){
      filterString+=keys[i]+"='"+val+"'"
    } else {
      filterString+=keys[i]+"="+val.toString()
    }
  }
  return filterString
}

/** 
* Sends a GET request to the Gilhari microservice API and returns list of JSON objects that
* meet the filter criterion, if any. 
* @param {string} endpoint The table name endpoint from which data is to be returned
* @param {object} args List of conditions on fields of the object being queried
* @returns {Promise<object>} List of JSON objects from database
*/
function gilhariAPIGet(endpoint, args) {
  var filterString=getFilterString(args)
  return axios.get(BASE_URL+endpoint+filterString)
  .then(response => response.data)
  .catch(err => err)
}

/**
 * Sends a POST request to the Gilhari microservice API, allowing one to add a new object to the
 * table specified
 * @param {String} endpoint The table name endpoint to which data is to be added
 * @param {String} object The object type to be posted
 * @param {object} args List of arguments that form the object to be added
 * @returns {Promise<AxiosResponse>} The newly created object
 */
function gilhariAPIPost(endpoint, object, args){
  console.log(args)
  let jsonObject = {
    ...args[object],
    ID: Math.floor(Math.random()*10000)
  }
  console.log(jsonObject)
  axios.post(BASE_URL+endpoint, {"entity":jsonObject})
  return jsonObject
}

/**
 * Updates the record at a specified ID vith new values passed as updations
 * @param {string} endpoint The table name endpoint at which data is to be updated
 * @param {object} args arguments passed to the function. Must include ID and updations
 * @returns {Promise<object>} List containing the newly updated object
 */
function gilhariAPIPatch(endpoint, args){
  console.log(args.ID, args.updations, args.updations[0], args[0])
  const keys = Object.keys(args.updations)
  var newValues=[]
  for (var i=0; i<keys.length; i++){
    newValues.push(keys[i], args.updations[keys[i]])
  }
  axios.patch(BASE_URL+endpoint+"?filter=ID="+args.ID.toString(), {"newValues":newValues})
  return gilhariAPIGet(endpoint, {ID:args.ID})
}
/**
 * Deletes an object specified by its ID
 * @param {string} endpoint The table name endpoint at which data is to be updated
 * @param {object} args arguments passed to the function. Must include ID 
 * @returns {Promise<object>} Empty list which previously held the object
 */
function gilhariAPIDelete(endpoint, args){
  console.log(args)
  const response = axios.delete(BASE_URL+endpoint+"?filter=id="+args.ID.toString())
  .then(response=>response.data)
  .catch(err=>err)
  console.log(response)
  return(gilhariAPIGet(endpoint, {ID:args.ID}))
}