import * as csv from 'jquery-csv'
import * as fs from 'fs'
import {books} from './data/books.js'

export const resolvers = {
    Query: {
      books(_, args){
        return [books.find((book) => book.Author === args.Author)]
      },
    },
  };
