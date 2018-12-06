import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import { BrowserRouter , Route } from 'react-router-dom'
import Mainpage from './components/Page/mainpage';
import Searchpage from './components/Page/Searchpage';
import Header from './components/Header';
import Bookcase from './components/Bookcase';
import Shelf from './components/Shelf';
import Book from './components/Book';
import AddBookButton from './components/AddBookButton';

class BooksApp extends React.Component {


  render() {
    return(
      <div>
        <Route path ='/'exact component={Mainpage}/>
        <Route path ='/Searchpage'exact component={Searchpage}/>
      </div>
    );
  }
}

export default BooksApp
