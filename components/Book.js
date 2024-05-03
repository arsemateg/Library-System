import React from 'react';
import book_img from '../images/book.png'
import '../css/book.css'

const Book = ({ book, handleCheckout, handleReturn, c_alert, r_alert}) => {
  return (
    <div>
      <img src = {book_img}  alt={book.title} />
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      {book.summary ? (
        <p>{book.summary}</p>
      ) : (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      )}
      <button onClick={() => { handleCheckout(book.id); c_alert(); }} disabled={book.isCheckedOut}>
        Checkout
      </button>
      <button onClick= {() => { handleReturn(book.id); r_alert(); }} disabled={!book.isCheckedOut}>
        Return
      </button>
    </div>
  );
};

export default Book;

