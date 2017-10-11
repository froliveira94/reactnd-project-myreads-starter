import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchMyReads extends Component {

    state = {
        query: '',
        booksResearched: []
    }

    _searchBook = (query, maxResults) => {
        BooksAPI.search(query, maxResults).then((result) => {
            this.setState({ booksResearched: result })
        })
    }

    _updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this._searchBook(query, 100)
    }

    render() {
        const { query, booksResearched } = this.state;
        const { updateBook } = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                        placeholder="Search by title or author"
                        value={ query }
                        onChange={(event) => this._updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    { query ? booksResearched.map((book) => (
                        <Book key={ book.id } book={ book } updateBook={ updateBook } />
                    )) : <div>...</div>}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchMyReads;