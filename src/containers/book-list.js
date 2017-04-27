import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }


  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>

    );
  }
}

function mapStateToProps(state) {
  //What ever is returned will show up as a props
  //inside the BookList
    return {
      books: state.books
    };
}
  // Anything returned from this function will end us
  //as props in the BookList container
function mapDispactchToProps(dispacth) {
  //Whenevr selectBook is called the result should be passed
  //to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispacth)

}

//Promote BookList from a component to container
//it needs to know about the dispach method, selectBook. Make it available
//as a prop.

export default connect(mapStateToProps, mapDispactchToProps)(BookList);
