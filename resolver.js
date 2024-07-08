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

function gilhariAPIGet(endpoint, args) {
  /*
  Sends a GET request to the Gilhari microservice API and returns list of JSON objects that
  meet the filter criterion, if any. Though it takes in a list of conditions, only the first
  is filtered for since using Gilhari's operationDetails is not possible within the body of a
  GET request.

  Args:
    endpoint <str>: The table name endpoint from which data is to be returned
    args <object>: List of conditions on fields of the object being queried
  
  Returns:
    Promise<object>
  */
  const keys = Object.keys(args)
  if (keys.length){
    const key = keys[0]
    const val = args[key]
    console.log(key, val, typeof val)
    if (typeof val === 'string'){
      return axios.get(BASE_URL+endpoint+"?filter="+key+"='"+val+"'")
      .then(response => response.data)
      .catch(err => err)
    } else {
      return axios.get(BASE_URL+endpoint+"?filter="+key+"="+val.toString())
      .then(response => response.data)
      .catch(err => err)
    }
  }
  return axios.get(BASE_URL+endpoint)
  .then(response => response.data)
  .catch(err => err)
}
  