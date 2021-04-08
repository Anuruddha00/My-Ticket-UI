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
              {/* <img className='eventUpcomingAllEventsCardImage'  /> This is for background image */}
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
            </div>
            <div className='eventUpcomingAllEventsCard'>
              {/* <img className='eventUpcomingAllEventsCardImage'/> */}
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
            </div>
            <div className='eventUpcomingAllEventsCard'>
              {/* <img className='eventUpcomingAllEventsCardImage'/> */}
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
          <h2 className='latestNewsTitle'>latest news</h2>
          <div className='latestNewsContent'>
            <div className='latestNewsContentCard'>
              <div className='latestNewsContentCardCalender'>
                <h1 className='latestNewsContentCardCalenderDate'>26</h1>
                <p className='latestNewsContentCardCalenderMonth'>august</p>
                <p className='latestNewsContentCardCalenderYear'>2016</p>
              </div>
            </div>
            <div className='latestNewsContentDescription'>
              <h1 className='latestNewsContentDescriptionTitle'>Attending the Indonesian Envato Authors National Meetup</h1>
              <div className='latestNewsContentDescriptionContent'>
                <p className='latestNewsContentDescriptionContentTime'>6 hours ago </p>
                <p className='latestNewsContentDescriptionContentFrom'> By <span>Admin</span></p>
              </div>
              <p className='latestNewsContentDescriptionPara'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
            </div>
          </div>

          <div className='latestNewsContent'>
            <div className='latestNewsContentCard'>
              <div className='latestNewsContentCardCalender'>
                <h1 className='latestNewsContentCardCalenderDate'>25</h1>
                <p className='latestNewsContentCardCalenderMonth'>august</p>
                <p className='latestNewsContentCardCalenderYear'>2016</p>
              </div>
            </div>
            <div className='latestNewsContentDescription'>
              <h1 className='latestNewsContentDescriptionTitle'>How to Join The Biggest Event Total Transverse Half Marathon</h1>
              <div className='latestNewsContentDescriptionContent'>
                <p className='latestNewsContentDescriptionContentTime'>6 hours ago </p>
                <p className='latestNewsContentDescriptionContentFrom'> By <span>Admin</span></p>
              </div>
              <p className='latestNewsContentDescriptionPara'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
            </div>
          </div>  

          <div className='latestNewsContent'>
            <div className='latestNewsContentCard'>
              <div className='latestNewsContentCardCalender'>
                <h1 className='latestNewsContentCardCalenderDate'>25</h1>
                <p className='latestNewsContentCardCalenderMonth'>august</p>
                <p className='latestNewsContentCardCalenderYear'>2016</p>
              </div>
            </div>
            <div className='latestNewsContentDescription'>
              <h1 className='latestNewsContentDescriptionTitle'>Ramayana Ballet at Prambanan Temple Klaten, Central of Java</h1>
              <div className='latestNewsContentDescriptionContent'>
                <p className='latestNewsContentDescriptionContentTime'>6 hours ago </p>
                <p className='latestNewsContentDescriptionContentFrom'> By <span>Admin</span></p>
              </div>
              <p className='latestNewsContentDescriptionPara'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
            </div>
          </div>

          <div className='latestNewsNumbers'>
            <li className='latestNewsNumbersOne'>1</li>
            <li className='latestNewsNumbersTwo'>2</li>
            <li className='latestNewsNumbersThree'>3</li>
            <li className='latestNewsNumbersFour'>4</li>
            <li className='latestNewsNumbersFive'>5</li>
          </div>
        </div>

        <div className='latestTweets'>
          <div className='latestTweetsContent'>
            <div className='latestTweetsContentDetails'>
              <h2 className='latestTweetsContentDetails Title'>latest tweets</h2>
            </div>
            <div className='latestTweetsContentAction'>
              <img className='latestTweetsContentActionLogo'/>
              <div className='latestTweetsContentActionBody'>
                <h3 className='latestTweetsContentActionBodyTitle'>myticket.com</h3>
                <p className='latestTweetsContentActionBodyPara'>@myticket</p>
              </div>
              <button className='latestTweetsContentActionAction'>Follow</button>
            </div>
            <div className='latestTweetsContentDescription'>
              <p className='latestTweetsContentDescriptionPara'>@myticket Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam #EratVolutpat.</p>
              <p className='latestTweetsContentDescriptionTime'>17 min</p>
            </div>
            <div className='latestTweetsContentDescription'>
              <p className='latestTweetsContentDescriptionPara'>@myticket Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam #EratVolutpat.</p>
              <p className='latestTweetsContentDescriptionTime'>18 min</p>
            </div>
            <div className='latestTweetsContentDescription'>
              <p className='latestTweetsContentDescriptionPara'>@myticket Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam #EratVolutpat.</p>
              <p className='latestTweetsContentDescriptionTime'>19 min</p>
            </div>
            <div className='latestTweetsContentDescription'>
              <p className='latestTweetsContentDescriptionPara'>@myticket Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam #EratVolutpat.</p>
              <p className='latestTweetsContentDescriptionTime'>20 min</p>
            </div>
            <div className='latestTweetsContentDescription'>
              <p className='latestTweetsContentDescriptionPara'>@myticket Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh.</p>
              <p className='latestTweetsContentDescriptionTime'>18 min</p>
            </div>
            <div className='latestTweetsContentDescription'>
              <p className='latestTweetsContentDescriptionPara'>@myticket Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam #EratVolutpat.</p>
              <p className='latestTweetsContentDescriptionTime'>17 min</p>
            </div>
          </div> 
        </div>
      </section> 
   </div>
  );
}

export default App;
