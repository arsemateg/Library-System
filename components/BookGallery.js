import React from 'react';
import Book from "./Book.js"

const BookGallery = ({ books, selectedGenres, handleCheckout, handleReturn, searchTerm, c_alert, r_alert}) => {
  const genreFilteredBooks = selectedGenres.length
    ? books.filter(book => selectedGenres.includes(book.genre))
    : books;

    const filteredBooks = genreFilteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
        
      );

return (
    <div>
      <h2>Book Gallery</h2>
      <div>
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <Book book = {book} 
            handleCheckout={handleCheckout}
            handleReturn={handleReturn}
            searchTerm = {searchTerm}
            c_alert = {c_alert}
            r_alert = {r_alert}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGallery;
