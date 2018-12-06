import React from 'react';
import Shelf from './Shelf';

class Bookcase extends React.Component {
  render() {
    return(
      <div >
        <h1>BOOKCASE COMPONENT</h1>
        <Shelf title = 'Currently Reading'></Shelf>
        <Shelf title = 'Want To Read'/>
        <Shelf title = 'Read'/>
      </div>
    )
  }
}

export default Bookcase;
