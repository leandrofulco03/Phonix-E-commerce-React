import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
        <div class="row">
          <p>Copyright © Phonix. All Rights Reserved</p>
          <div class="social-icons">
          <ul>
              <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
          </ul>
          </div>
      </div>
    </section>
  )
}

export default Footer