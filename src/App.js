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
      this.setState({ books: books })
    })
  }

  componentDidMount() {
    this._fetchAll()
  }

  _updateBook = (book, shelf) => {
    const { books } = this.state;
    let cloneState = books;
    
    if(book.shelf === undefined) {
      book.shelf = shelf;
      cloneState.push(book);
    }
    
    const updatedBooks = cloneState.map(bookState => {
      if (bookState.id === book.id) {
        bookState.shelf = shelf
      }
      return bookState
    })

    BooksAPI.update(book, shelf)
    this.setState({ books: updatedBooks })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads books={ books } updateBook={ this._updateBook }  />
        )}/>
        <Route exact path="/search" render={({ history }) => (
          <SearchMyReads updateBook={ this._updateBook } />
        )}/>
      </div>
    )
  }

}

export default App;