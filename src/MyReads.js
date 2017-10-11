import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReadShelf, WantToReadShelf, CurrentlyShelf } from './Shelf'

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
                <CurrentlyShelf books={ currentlyReadingBooks } updateBook={ updateBook } />
                <WantToReadShelf books={ wantToReadBooks } updateBook={ updateBook } />
                <ReadShelf books={ readBooks } updateBook={ updateBook } />
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
