import React, { useState } from 'react';
import './App.css';

import movie1Image from './assets/movie1.jpg';
import movie2Image from './assets/movie2.jpg';
import movie3Image from './assets/movie3.jpg';
import movie4Image from './assets/movie4.jpeg';
import movie5Image from './assets/movie5.jpg';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Movie 1',
      releaseDate: '2024-06-01',
      casts: ['Sai Tamhankar', 'Saiyami Kher', 'Jitendra Joshi'],    
      
      
      imageUrl: movie1Image,
      flipped: false
    },
    {
      id: 2,
      title: 'Movie 2',
      releaseDate: '2024-06-00',
      casts: [' Kamal Haasan ', 'Rakul Preet Singh', 'Siddharth ', 'Mark Bennington'],
      imageUrl: movie2Image,
      flipped: false
    },
    {
      id: 3,
      title: 'Movie 3',
      releaseDate: '2024-05-31',
      casts: ['Harshvardhan Rane', ' Anil Kapoor', 'Divya Khosla Kumar'],   
      imageUrl: movie3Image,
      flipped: false
    },
    {
      id: 4,
      title: 'Movie 4',
      releaseDate: '2024-10-6 ',
      casts: ['Kamal Haasan', 'Abhirami', 'Trisha Krishnan'], 
      imageUrl: movie4Image,
      flipped: false
    },
    {  
    
      id: 5,
      title: 'Movie 5',
      releaseDate: '2024-05-31',                
      casts: ['Rajkummar Rao', 'Janhvi Kapoor', 'Rajesh Sharma'],
      imageUrl: movie5Image,
      flipped: false
    },
  ]);

  const handleClick = (id) => {
    setMovies(movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, flipped: !movie.flipped };
      }
      return movie;
    }));
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Fan Club</a></li>
          <li><a href="#">Events</a></li>
        </ul>
      </nav>
      <div className="container">
        {movies.map(movie => (
          <div key={movie.id} className={`movie-card ${movie.flipped ? 'flipped' : ''}`} onClick={() => handleClick(movie.id)}>
            <div className="front">
              <img src={movie.imageUrl} alt={movie.title} />
            </div>
            <div className="back">
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Top 3 Casts: {movie.casts.join(', ')}</p>
              <button>View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
