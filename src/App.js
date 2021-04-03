import './styles.scss';

function App() {
  return (
   <div>
      <nav>
        <ul>
          <li>+62274 889767</li>
          <li>hello@myticket.com</li>
        </ul>
        <ul>
          <li>SIGN IN</li>
          <li>SIGN UP</li>
        </ul>
      </nav>
      <section>
        <div>
          <nav>
            <img src='logo.png'/>
            <ul>
              <li>SCHEDULE</li>
              <li>CONCERTS</li>
              <li>SPORTS</li>
              <li>PARTIES</li>
              <li>THEATER</li>
              <li>GALERY</li>
              <li>BLOG</li>
              <button>0</button>
            </ul>
          </nav>
          <div>
            <h1>Make Your Dream Come True</h1>
            <h3>Meat your favorite artist,sport teams and parties</h3>
            <form>
              <input type='text' placeholder='Search Artist, Teams, or Venue'/>
            </form>
            <div>
              <h3>San Francisco, CA</h3>
              <p>Change Location</p>
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
