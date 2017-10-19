import React, { Component } from 'react'
import Book from './Book'

const Shelf = ({ books, title, updateBook }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book, i) => <Book key={ i } book={ book } updateBook={ updateBook } />)}
            </ol>
        </div>
    </div>
)

export default Shelf