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
            <h3 className='landingPrimarySearchDescription'>Meet your favorite artist,sport teams and parties</h3>
            <form className='landingPrimarySearchInput'>
              <input type='text' placeholder='Search Artist, Teams, or Venue'/>
            </form>
            <div className='landingPrimarySearchFooter'>
              <h3 className='landingPrimarySearchFooterLocation'>San Francisco, CA</h3>
              <p className='landingPrimarySearchFooterAction'>Change Location</p>
            </div>
          </div>
        </div>
        <div className='landingSecondary'>
          <h3 className='landingSecondaryTitle'>TODAY'S SCHEDULE</h3>
          <div className='landingSecondarySchedule'>
            <div className='landingSecondaryScheduleEvent'>
              <div className='landingSecondaryScheduleEventDetails'>
                <div className='landingSecondaryScheduleEventDetailsTime'>
                  <h1 className='landingSecondaryScheduleEventDetailsTimeAt'>8:00</h1>
                  <span className='landingSecondaryScheduleEventDetailsTimeConvention'>AM</span>
                </div>
                <p className='landingSecondaryScheduleEventDetailsVenue'>Klal Kanjeng Orchestra</p>
                <button className='landingSecondaryScheduleEventDetailsBook'>GET TICKET</button>
              </div>
              <div className='landingSecondaryScheduleEventArrow'>></div>
            </div>

            <div className='landingSecondaryScheduleEvent'>
              <div className='landingSecondaryScheduleEventDetails'>
                <div className='landingSecondaryScheduleEventDetailsTime'>
                  <h1 className='landingSecondaryScheduleEventDetailsTimeAt'>8:00</h1>
                  <span className='landingSecondaryScheduleEventDetailsTimeConvention'>AM</span>
                </div>
                <p className='landingSecondaryScheduleEventDetailsVenue'>Envato Author Meetup</p>
                <button className='landingSecondaryScheduleEventDetailsBook'>GET TICKET</button>
              </div>
              <div className='landingSecondaryScheduleEventArrow'>></div>
            </div>

            <div className='landingSecondaryScheduleEvent'>
              <div className='landingSecondaryScheduleEventDetails'>
                <div className='landingSecondaryScheduleEventDetailsTime'>
                  <h1 className='landingSecondaryScheduleEventDetailsTimeAt'>10:00</h1>
                  <span className='landingSecondaryScheduleEventDetailsTimeConvention'>AM</span>
                </div>
                <p className='landingSecondaryScheduleEventDetailsVenue'>BMW Open Championship</p>
                <button className='landingSecondaryScheduleEventDetailsSold'>SOLD OUT</button>
              </div>
              <div className='landingSecondaryScheduleEventArrow'>></div>
            </div>

            <div className='landingSecondaryScheduleEvent'>
              <div className='landingSecondaryScheduleEventDetails'>
                <div className='landingSecondaryScheduleEventDetailsTime'>
                  <h1 className='landingSecondaryScheduleEventDetailsTimeAt'>9:00</h1>
                  <span className='landingSecondaryScheduleEventDetailsTimeConvention'>PM</span>
                </div>
                <p className='landingSecondaryScheduleEventDetailsVenue'>UEFA Champions League: Barca vs Arsenal</p>
                <button className='landingSecondaryScheduleEventDetailsSold'>SOLD OUT</button>
              </div>
        
            </div>

          </div>
        </div>
      </section>
      
      <section className='event'>
        <div className='eventUpcoming'>
          <div className='eventUpcomingContent'>
            <div className='eventUpcomingContentDetails'>
              <h3 className='eventUpcomingContentDetailsTitle'>upcoming events</h3>
              <p className='eventUpcomingContentDetailsPara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut</p>
            </div>
            <button className='eventUpcomingContentAction'>see all upcoming events</button>
          </div>

          <div className='eventUpcomingAllEvents'>
            <div className='eventUpcomingAllEventsCard'>
              <img className='eventUpcomingAllEventsCardImage'  />
                <div className='eventUpcomingAllEventsCardCalender'>
                  <h1 className='eventUpcomingAllEventsCardCalenderDate'>25</h1>
                  <p className='eventUpcomingAllEventsCardCalenderMonth'>august</p>
                  <p className='eventUpcomingAllEventsCardCalenderYear'>2016</p>
                </div>
              <div className='eventUpcomingAllEventsCardContent'>
                <div className='eventUpcomingAllEventsCardContentDetails'>
                  <h3 className='eventUpcomingAllEventsCardContentDetailsTitle'>BMW Open Championship</h3>
                  <p className='eventUpcomingAllEventsCardContentDetailsPara'>San Francisco</p>
                </div>    
                <button className='eventUpcomingAllEventsCardContentAction'>get ticket</button> 
              </div>

              <img className='eventUpcomingAllEventsCardImage'/>
                <div className='eventUpcomingAllEventsCardCalender'>
                  <h1 className='eventUpcomingAllEventsCardCalenderDate'>26</h1>
                  <p className='eventUpcomingAllEventsCardCalenderMonth'>august</p>
                  <p className='eventUpcomingAllEventsCardCalenderYear'>2016</p>
                </div>
              <div className='eventUpcomingAllEventsCardContent'>
                <div className='eventUpcomingAllEventsCardContentDetails'>
                  <h3 className='eventUpcomingAllEventsCardContentDetailsTitle'>Klal Kanjeng Orchestra</h3>
                  <p className='eventUpcomingAllEventsCardContentDetailsPara'>San Francisco</p>
                </div>    
                <button className='eventUpcomingAllEventsCardContentAction'>get ticket</button> 
              </div>

              <img className='eventUpcomingAllEventsCardImage'/>
                <div className='eventUpcomingAllEventsCardCalender'>
                  <h1 className='eventUpcomingAllEventsCardCalenderDate'>27</h1>
                  <p className='eventUpcomingAllEventsCardCalenderMonth'>august</p>
                  <p className='eventUpcomingAllEventsCardCalenderYear'>2016</p>
                </div>
              <div className='eventUpcomingAllEventsCardContent'>
                <div className='eventUpcomingAllEventsCardContentDetails'>
                  <h3 className='eventUpcomingAllEventsCardContentDetailsTitle'>Envato Author SF Meatup</h3>
                  <p className='eventUpcomingAllEventsCardContentDetailsPara'>San Francisco</p>
                </div>    
                <button className='eventUpcomingAllEventsCardContentAction'>get ticket</button> 
              </div>

            </div>
          </div>
        </div>

        <div className='eventCategories'>
          <div className='eventCategoriesContent'>
            <div className='eventCategoriesContentDetails'>
              <h3 className='eventCategoriesContentDetailsTitle'>event by categories</h3>
            </div>
              <div className='eventCategoriesContentDetailsList'>
                <div className='eventCategoriesContentDetailsListConcert'>
                  <h2 className='eventCategoriesContentDetailsListConcertTitle'>concerts</h2>
                </div>
                <div className='eventCategoriesContentDetailsListSports'>
                  <h2 className='eventCategoriesContentDetailsListSportsTitle'>sports</h2>
                </div>
                <div className='eventCategoriesContentDetailsListTheater'>
                  <h2 className='eventCategoriesContentDetailsListTheaterTitle'>theater</h2>
                </div>
                <div className='eventCategoriesContentDetailsListParties'>
                  <h2 className='eventCategoriesContentDetailsListPartiesTitle'>parties</h2>
                </div>
                <div className='eventCategoriesContentDetailsListCommunities'>
                  <h2 className='eventCategoriesContentDetailsListCommunitiesTitle'>communities</h2>
                </div>
                <div className='eventCategoriesContentDetailsListClasses'>
                  <h2 className='eventCategoriesContentDetailsListClassesTitle'>classes</h2>
                </div>
           </div>
          </div>
        </div>
      </section>

      <section className='number'>
        <div className='numberCard'>
          <h1 className='numberCardDetailsNumber'>598</h1>
          <span className='numberCardLine'></span>
          <h3 className='numberCardTitle'>events active</h3> 
        </div>  
        <div className='numberCard'>
          <h1 className='numberCardDetailsNumber'>16,173</h1>
          <span className='numberCardLine'></span>
          <h3 className='numberCardTitle'>active users</h3> 
        </div> 
        <div className='numberCard'>
          <h1 className='numberCardDetailsNumber'>136,874</h1>
          <span className='numberCardLine'></span>
          <h3 className='numberCardTitle'>ticket sold</h3> 
        </div>    
      </section>

      <section className='content'>
        <div className='contentRecent'>
          <div className='contentRecentContent'>
            <h2 className='contentRecentContentTitle'>recent videos</h2>
          </div>
        <div className='contentRecentAll'>  
        <div className='contentRecentAllVideos'>
          <div className='contentRecentAllVideosCard'>
            <img className='contentRecentAllVideosCardThumb'/>
            <div className='contentRecentAllVideosCardPlayer'>
              <img className='contentRecentAllVideosCardPlayerThumb'/>
              <span className='contentRecentAllVideosCardPlayerTime'>2:33</span>
            </div>
          </div>
          <div className='contentRecentAllVideosCardDescription'>
            <p className='contentRecentAllVideosCardDescriptionPara'>Envato Author Community Fun Hiking at Semeru Mountaint</p>
            <span className='contentRecentAllVideosCardDescriptionLine'></span>
          </div>
        </div>
      

        <div className='contentRecentAllVideos'>
          <div className='contentRecentAllVideosCard'>
            <img className='contentRecentAllVideosCardThumb'/>
            <div className='contentRecentAllVideosCardPlayer'>
              <img className='contentRecentAllVideosCardPlayerThumb'/>
              <span className='contentRecentAllVideosCardPlayerTime'>2:33</span>
            </div>
          </div>
          <div className='contentRecentAllVideosCardDescription'>
            <p className='contentRecentAllVideosCardDescriptionPara'>Nike Urban Running Chalangge with Kobe 2016</p>
            <span className='contentRecentAllVideosCardDescriptionLine'></span>
          </div>
        </div>

        <div className='contentRecentAllVideos'>
          <div className='contentRecentAllVideosCard'>
            <img className='contentRecentAllVideosCardThumb'/>
            <div className='contentRecentAllVideosCardPlayer'>
              <img className='contentRecentAllVideosCardPlayerThumb'/>
              <span className='contentRecentAllVideosCardPlayerTime'>6:45</span>
            </div>
          </div>
          <div className='contentRecentAllVideosCardDescription'>
            <p className='contentRecentAllVideosCardDescriptionPara'>Entrepreneurial Think Thank: Shifting the Education Paradigm</p>
            <span className='contentRecentAllVideosCardDescriptionLine'></span>
          </div>
        </div>

        <div className='contentRecentAllVideos'>
          <div className='contentRecentAllVideosCard'>
            <img className='contentRecentAllVideosCardThumb'/>
            <div className='contentRecentAllVideosCardPlayer'>
              <img className='contentRecentAllVideosCardPlayerThumb'/>
              <span className='contentRecentAllVideosCardPlayerTime'>6:45</span>
            </div>
          </div>
          <div className='contentRecentAllVideosCardDescription'>
            <p className='contentRecentAllVideosCardDescriptionPara'>Southeast Asia Weekend Festival 2016</p>
            <span className='contentRecentAllVideosCardDescriptionLine'></span>
          </div>
        </div>
      </div>
      </div>
      <div className='contentCallToAction'>
        <div className='contentCallToActionDetails'>
          <h2 className='contentCallToActionDetailsTitle'>Share experience with your friends</h2>
          <p className='contentCallToActionDetailsPara'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
        </div>
        <button className='contentCallToActionAction'>Learn More</button>
      </div>
      </section>

      <section className='latest'>
        <div className='latestNews'>
          <div className='latestNewsDetails'>
            <h2 className='latestNewsDetailsTitle'>latest news</h2>
          </div>
          <div className='latestNewsCard'>
            <img className='latestNewsCardImage'/>
            <div className='latestNewsCardImageCalender'>
              <h1 className='latestNewsCardImageCalenderDate'>26</h1>
              <p className='latestNewsCardImageCalenderMonth'>august</p>
              <p className='latestNewsCardImageCalenderYear'>2016</p>
            </div>
          </div>
          <div className='latestNewsDescription'>
            <h1 className='latestNewsDescriptionTitle'>Attending the Indonesian Envato Authors National Meetup</h1>
            <div className='latestNewsDescriptionContent'>
              <p className='latestNewsDescriptionContentTime'>6 hours ago</p>
              <p className='latestNewsDescriptionContentFrom'>By Admin</p>
            </div>
            <p className='latestNewsDescriptionPara'>fsfsfssfsfsfsfsfcvwfssdfwwefqffaf</p>
          </div>
          <div className='latestNewsNumbers'>
            <li className='latestNewsNumbersOne'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </div>
        </div>
        <section className='latestTweets'>
          <div className='latestTweetsContent'>
          <div className='latestTweetsContentDetails'>
            <h2 className='latestTweetsContentDetailsTitle'>latest tweets</h2>
          </div>
          <div className='latestTweetsContentAction'>
            <button className='latestTweetsContentActionLogo'>m</button>
            <div className='latestTweetsContentActionBody'>
              <h3 className='latestTweetsContentActionBodyUrl'>myticket.com</h3>
              <p className='latestTweetsContentActionBodyPara'>@myticket</p>
            </div>
            <button className='latestTweetsContentActionFollow'>Follow</button>
          </div>
          <div className='latestTweetsContentDescription'>
            <p className='latestTweetsContentDescriptionPara'>qeqadsqddadadasdasdasdddadasd</p>
            <p className='latestTweetsContentDescriptionTime'>17 min</p>
          </div>
          </div> 
        </section>
      </section> 
   </div>
  );
}

export default App;