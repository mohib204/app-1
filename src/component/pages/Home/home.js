import React from 'react';
import './home.css';
import ownerPic from './Richpicture.jpg'; // Ensure to place the picture in the appropriate directory

function Home() {
  return (
    <div className="homepage">
      <div className="homehead">
      <h1>Welcome to my personal homepage</h1>
      <p>This is my main page</p>
      </div>
      <section className="about">
        <h2>A Little About Me</h2>
        <img src={ownerPic} alt="Owner" />
        <p>My name is Rich. I was born in Ohio on April 30th, 1982. I went to elementary school until 6th grade, then to middle school for 2 years, and high school for a year and a half. After that, I transferred to a high school in Lima, Ohio, for the rest of that year. Then I attended the School for the Blind in Columbus for 2 years and graduated with a diploma. I am visually impaired due to a condition called toxoplasmosis, which affects my ability to see far.</p>
        <p>I have brown hair and eyes and I am 6 foot 1 inch tall.</p>
        <p>I enjoy using my Roku and Fire TV Stick to watch Pluto TV.</p>
      </section>

      <section className="guestbook">
        <h2>View or sign my Guestbook</h2>
        <p>
          <a href="https://www.bravenet.com/guestbooks" target="_blank" rel="noopener noreferrer">
            Free Guestbooks by Bravenet.com
          </a>
        </p>
      </section>

      <footer className='fo'>
        © 2024 Rich's Homepage
      </footer>
    </div>
  );
}

export default Home;
