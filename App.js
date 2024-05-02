// App.js

import React from 'react';
import './App.css';
import image1 from "./Goa.JPG";
import image2 from "./Mumbai.jpg";
import image3 from "./lakshwadeep.jpg";

import image4 from "./vegas.JPG";
import image5 from "./puttur.jpg";
import image6 from "./manglore.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Travel Blog</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Priya and Sandhya Travel Blog!</h2>
          <p>Explore the world with us and discover amazing destinations.</p>
        </section>
        <section className="blog-posts">
          <div className="blog-row">
            <div className="blog-post">
             <img src={image1} alt="Goa" className="blog-img" />
              <h3>Goa</h3>
              <p>Goa is a state in western India with coastlines stretching along the Arabian Sea. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda. </p>
            </div>
            <div className="blog-post">
              <img src={image5}alt="Puttur" className="blog-img" />
              <h3>Puttur</h3>
              <p>Puttur is a city in Dakshina Kannada district, in Karnataka state of India. </p>
            </div>
            <div className="blog-post">
              <img src={image3} alt="Lakshwadeep" className="blog-img" />
              <h3>Lakshwadeep</h3>
              <p>Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India.

                
              </p>
            </div>
          </div>
          <div className="blog-row">
            <div className="blog-post">
              <img src={image2} alt="Mumbai" className="blog-img" />
              <h3>Mumbai</h3>
              <p>Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city.</p>
            </div>
            <div className="blog-post">
              <img src={image4} alt="Las Vegas" className="blog-img" />
              <h3>Las Vegas</h3>
              <p>Las Vegas, often known simply as Vegas, is the most populous city in the U.S. state of Nevada and the county seat of Clark County..</p>
            </div>
            <div className="blog-post">
              <img src={image6} alt="Mangalore" className="blog-img" />
              <h3>Mangalore</h3>
              <p>Mangalore (or Mangaluru) is an Arabian Sea port and a major commercial center in the Indian state of Karnataka.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Travel Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;