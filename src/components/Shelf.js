import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book/>
          </ol>
        </div>
      </div>

    )
  }
}

export default Shelf;
