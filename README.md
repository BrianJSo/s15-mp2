# LaSell

## About
An online bidding site for Lasallians inspired by DLSU Bids to Pick.

## Authors

* LOQUINTE, Kenneth Uriel
* SO, Brian Jezreel So
* SARABIA, Ryan Miguel

## Setting up

1. Go to the project folder in the command line.
2. Run `npm install` to install dependencies.
3. Run `node index.js` to start the server.
4. Go to http://localhost:3000/ in the browser to view the app.

## Navigating the app

1. **Log In/ Registration** - You will be greeted by the Log In / Registration page. You may also opt to make your own account by registering. Registering will automatically login the new user. Accessing other pages (via address bar) will not work when not logged-in. The following credentials may be used to log-in:

| Email                          | Password |
|--------------------------------|------------|
| brian_jezreel_so@dlsu.edu.ph | abc      | 
| ryan_miguel_sarabia@dlsu.edu.ph | abc      | 


2. **Explore** - Once logged in, you will be greeted by the Explore page where all the auctions are displayed. You can view the auctions by pressing their images. Clicking the seller information at the top of each auction card will redirect you to the seller’s profile page. You can view the different pages of the app through the header of all pages.

3. **Activity** - Accessed through the header, this page shows all watched and active bids of the user. Clicking on any of the shown auctions  will automatically lead the user to that auction’s page. However, if the user is currently not watching any auction or is not the highest bidder on any auction, the Activity page will be empty.

4. **Profile** The profile page can be accessed through the header to access your own profile, or by clicking another seller’s info in the auctions. The auctions of the seller viewed will be shown in their profile page, and can be clicked to redirect to that auction’s page.

5. **Create Auction** - To create an auction, click on the create auction button on the right side of the header. The Create Auction page will let you fill up the information to create your auction. Pressing the Create Auction button will validate the auction and redirect to the created auction’s page once successful.

6. **Log Out** - Clicking on the rightmost button on the header will direct the user back to the login page.

## Missing Features

* Functions associated with closing the auction haven't been made yet.
* Number of user’s posts not yet displayed in profile. 
