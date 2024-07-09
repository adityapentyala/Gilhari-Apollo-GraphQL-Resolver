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
    },
  };

/** 
* Sends a GET request to the Gilhari microservice API and returns list of JSON objects that
* meet the filter criterion, if any. 
* @param {string} endpoint The table name endpoint from which data is to be returned
* @param {object} args List of conditions on fields of the object being queried
* @returns {Promise<object>} List of JSON objects from database
*/
function gilhariAPIGet(endpoint, args) {
  const keys = Object.keys(args)
  if (keys.length){
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
    return axios.get(BASE_URL+endpoint+filterString)
    .then(response => response.data)
    .catch(err => err)
  }
  return axios.get(BASE_URL+endpoint)
  .then(response => response.data)
  .catch(err => err)
}