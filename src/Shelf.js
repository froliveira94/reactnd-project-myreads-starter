import React, { Component } from 'react'
import Book from './Book';



class Shelf extends Component {
    render() {
        const { books, title } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book, i) => <Book key={i} imagePath={ book.imageLinks.thumbnail} title={book.title} author={book.authors[0]} />)}
                </ol>
                </div>
            </div>
        )
    }
}


export class ReadShelf extends Shelf {
    static defaultProps = {
        title: 'Read'
    }
}

export class WantToReadShelf extends Shelf {
    static defaultProps = {
        title: 'Want to Read'
    }
}

export class CurrentlyShelf extends Shelf {
    static defaultProps = {
        title: 'Currently Reading'
    }
}