import React from 'react';

import * as BooksAPI from '../../BooksAPI'

import Header from '../Header';
import Bookcase from '../Bookcase';
import AddBookButton from '../AddBookButton';


class Mainpage extends React.Component {
  constructor(){
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books})
      console.log(books);
      
    })
  }
  // console.log(books={this.props.books});


  render() {
    return(
      <div className="app">
        <div className="list-books">
            <Header/>
            <Bookcase/>
            <AddBookButton/>
          </div>
      </div>

    )
  }
}

export default Mainpage;
