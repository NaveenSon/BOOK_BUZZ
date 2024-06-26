import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book, role}) => {
    const {name, author, imageUrl} = book;
  return (
    <div className='book-card'>
        <img src={imageUrl} alt={name} className='book-image'/>
        <div className="book-details">
            <h3>Book : {name}</h3>
            <p>Author : {author}</p>
        </div>
        {role === "admin" &&
        <div className="book-actions">
        <button><Link to={`/book/${book._id}`} className='btn-link'>edit</Link></button>
        <button><Link to={`/delete/${book._id}`} className='btn-link'>delete</Link></button>
    </div>}
        
    </div>
  )
}

export default BookCard