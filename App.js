import React, { useState, useEffect } from 'react';
import booksData from './books.json';
import BookGallery from './components/BookGallery';
import Checkbox from './components/Checkbox';
import Search from './components/Search'
import './App.css';


const App = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBooks(booksData.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter((g) => g !== genre);
      } else {
        return [...prevGenres, genre];
      }
    });
  };

  const handleCheckout = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, isCheckedOut: true } : book
      )
    );
  };

  const handleReturn = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, isCheckedOut: false } : book
      )
    );  
  }; 


  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const c_alert = () => {
    alert("Happy reading! You have succesfully checked out your book ");
  }

  const r_alert = () => {
    alert("Thank you! You have succesfully returned your book ");
  }

  return (
    <div>
      <h1>Book Gallery App</h1>
      <div>
      <Search onSearchChange={handleSearchChange} />
      <Checkbox
          label="fiction"
          checked={selectedGenres.includes('fiction')}
          onChange={() => handleGenreChange('fiction')}
        />
        <Checkbox
          label="history + the world"
          checked={selectedGenres.includes('non-fiction')}
          onChange={() => handleGenreChange('non-fiction')}
        />
        <Checkbox
          label="educational"
          checked={selectedGenres.includes('educational')}
          onChange={() => handleGenreChange('educational')}
        />
        <Checkbox
          label="business"
          checked={selectedGenres.includes('business')}
          onChange={() => handleGenreChange('business')}
        />
        <Checkbox
          label="self-help"
          checked={selectedGenres.includes('self-help')}
          onChange={() => handleGenreChange('self-help')}
        />
        <Checkbox
          label="health"
          checked={selectedGenres.includes('health')}
          onChange={() => handleGenreChange('health')}
        />
        <BookGallery
          books={books}
          searchTerm = {searchTerm}
          selectedGenres={selectedGenres}
          handleCheckout={handleCheckout}
          handleReturn={handleReturn}
          c_alert = {c_alert}
          r_alert = {r_alert}
        />
      </div>
    </div>
  );
};

export default App;