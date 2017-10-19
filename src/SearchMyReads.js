import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchMyReads extends Component {

    constructor(props) {
        super(props);

        this._updateQuery = this._updateQuery.bind(this);
        this._searchBook = this._searchBook.bind(this);

        this.state = {
            query: '',
            booksResearched: []
        }
    }

    _searchBook = (query, maxResults) => {
        const { books } = this.props;

        console.log(`MINE `, books)
        
        BooksAPI.search(query, maxResults).then((result) => {
            console.log(`RESPONSE `, result)
            const searched = result.map(book => {
                const filtered = books.filter(currentBook => currentBook.id === book.id)[0];

                return filtered ? filtered : book;
            })
            console.log(`FILTERED `, searched)
            this.setState({ booksResearched: searched })
        })
    }

    _updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this._searchBook(query, 100)
    }

    render() {
        const { query, booksResearched } = this.state;
        const { updateBook, books } = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            placeholder="Search by title or author"
                            value={ query }
                            onChange={(e) => this._updateQuery(e.target.value) } />
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