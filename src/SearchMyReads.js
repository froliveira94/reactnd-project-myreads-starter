import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Book from './Book'

class SearchMyReads extends Component {

    state = {
        query: '',
    }

    _updateQuery = (query, searchBook) => {
        this.setState({ query: query.trim() })
        searchBook(query, 100)
    }

    render() {
        const { query } = this.state;
        const { updateBook, searchBook, books } = this.props;

        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" 
                    placeholder="Search by title or author"
                    value={ query }
                    onChange={(event) => this._updateQuery(event.target.value, searchBook)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                { query ? books.map((book) => (
                    <Book key={ book.id } book={ book } updateBook={ updateBook } />
                )) : <div>...</div>}
                </ol>
            </div>
            </div>
        )
    }
}

export default SearchMyReads;