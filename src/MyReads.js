import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class MyReads extends Component {

  render() {
    const { books, updateBook } = this.props;
    const readBooks = books.filter(book => book.shelf === 'read')
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead')
    const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading')

    return (
      <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading" books={currentlyReadingBooks} updateBook={ updateBook } />
                <Shelf title="Want to Read" books={wantToReadBooks} updateBook={ updateBook } />
                <Shelf title="Read" books={readBooks} updateBook={ updateBook } />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}

export default MyReads
