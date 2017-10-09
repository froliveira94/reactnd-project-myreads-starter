import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyReads from './MyReads'
import SearchMyReads from './SearchMyReads'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends Component {

  state = {
    books: [],
  }

  _fetchAll() {
    BooksAPI.getAll().then((books) => {
      console.log(`BOOKS`, books)
      this.setState({ books: books })
    })
  }

  componentDidMount() {
    this._fetchAll()
  }

  _updateBook = (book, shelf) => {
    const { books } = this.state;
    const updatedBooks = books.map(bookState => {
      if (bookState.id === book.id) {
        bookState.shelf = shelf
      }
      return bookState
    })
    
    BooksAPI.update(book, shelf)
    this.setState({ books: updatedBooks })
  }

  _searchBook = (query, maxResults) => {
    BooksAPI.search(query, maxResults).then((result) => {
      this.setState({ books: result })
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads books={ books } updateBook={ this._updateBook }  />
        )}/>
        <Route exact path="/search" render={({ history }) => (
          <SearchMyReads 
            books={ books } 
            searchBook={ this._searchBook } 
            updateBook={ this._updateBook }
            updateBook={(book, shelf) => {
              this._updateBook(book, shelf)
              history.push('/')
            }} />
        )}/>
      </div>
    )
  }

}

export default App;