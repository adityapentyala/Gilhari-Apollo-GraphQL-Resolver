import * as csv from 'jquery-csv'
import * as fs from 'fs'
import {books} from './data/books.js'
import axios from 'axios'

const BASE_URL = 'http://localhost:80/gilhari/v1/'

export const resolvers = {
    Query: {
      books(_, args){
        return axios.get(BASE_URL+'Books/').then(response => response.data)
      },
    },
  };
