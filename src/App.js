import React from 'react';
import './styles.scss';

function App() {
  return (
   <div className='container'>
      <nav className='navbar'>
        <ul className='navbarContact'>
          <li className='navbarContactNumber'>+62274 889767</li>
          <li className='navbarContactEmail'>hello@myticket.com</li>
        </ul>
        <ul className='navbarAction'>
          <li className='navbarActionSignIn'><button>sign in</button></li>
          <li className='navbarActionSignUp'><button>SIGN UP</button></li>
        </ul>
      </nav>
      <section className='landing'>
        <div className='landingPrimary'>
          <nav className='landingPrimaryNavbar'>
            <img className='landingPrimaryNavbarImg' src='logo.png'/>
            <ul className='landingPrimaryNavbarOptions'>
              <li>SCHEDULE</li>
              <li>CONCERTS</li>
              <li>SPORTS</li>
              <li>PARTIES</li>
              <li>THEATER</li>
              <li>GALERY</li>
              <li>BLOG</li>
              <li>CART</li>
            </ul>
          </nav>
          <div className='landingPrimarySearch'>
            <h1 className='landingPrimarySearchTitle'>Make Your Dream Come True</h1>
            <h3 className='landingPrimarySearchDescription'>Meat your favorite artist,sport teams and parties</h3>
            <form className='landingPrimarySearchInput'>
              <input type='text' placeholder='Search Artist, Teams, or Venue'/>
            </form>
            <div className='landingPrimarySearchFooter'>
              <h3 className='landingPrimarySearchFooterLocation'>San Francisco, CA</h3>
              <p className='landingPrimarySearchFooterAction'>Change Location</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>TODAY'S SCHEDULE</h3>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <h1>8:00</h1>
                  <span>AM</span>
                </div>
                <p>Klal Kanjeng Orchestra</p>
                <button>GET TICKET</button>
              </div>
              <div>></div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
   </div>
  );
}

export default App;
