# SuperheroHunter
Superhero Hunter JS
This is a JavaScript test that involves creating a superhero hunter app using only vanilla JavaScript. The app utilizes the Marvel API for retrieving superhero information. Below are the detailed instructions and features required for this test.

Problem Statement
Create a superhero hunter app using ONLY vanilla JavaScript, with no libraries or frameworks allowed for JavaScript (you can use any CSS framework like Bootstrap).

Instructions
Register on the Marvel API website to obtain public and private keys.
Follow the instructions on how to use the API key here. Use the timestamp as ts and create the hash using the md5 hash of ts, private-key, and public-key.

To generate an md5 hash, install crypto-js:
Copy code
npm install crypto-js
Then use md5 as follows:
javascript
Copy code
var MD5 = require("crypto-js/md5"); 
console.log(MD5("text to hash").toString());
Ensure correct API URL usage to avoid CORS errors.

You are ALLOWED to style the app as you like.
You are ALLOWED to use Google for research and problem-solving.
DO NOT copy and paste code from the internet.
DO NOT cheat with other students. Remember, these tests are for learning. Cheating won’t help.
Once finished, create a video (up to 5 minutes) explaining how you approached the problem in code and showcasing the final product. Upload the video to YouTube, Google Drive, or similar platforms.
Host the code on GitHub. This is compulsory, and submissions without hosting will be rejected.

Features
Home Page
Fetch and display a list of Superheroes (Characters) on the home page.
Create a search bar to filter characters based on the search query.
Example API endpoint: https://gateway.marvel.com:443/v1/public/characters?ts=<time-stamp>&apikey=<public-key>&hash=<md5(ts+privateKey+publicKey)>
Each search result should have a favorite button. Clicking this button should add the superhero to "My favorite superheroes" list.
Clicking on any search result should open a new page with more information about that superhero (Superhero page).
Superhero Page
Display detailed information about the superhero including name, photo, bio, and other information provided by the API (comics, events, series, stories, etc).
My Favorite Superheroes Page
Display a list of all favorite superheroes.
Make this list persistent (maintain the same number of superheroes before and after closing the browser).
Each superhero should have a "remove from favorites" button. Clicking this button should remove the superhero from the list.
Judging Criteria
The project will be evaluated based on the following criteria:

Fulfillment of all functionalities mentioned above
Proper use of GitHub for version control
Quality of the Readme.md file
Code hosting on GitHub
Code quality, including comments, structuring, indentation, variable and function naming
Styling and design of the app
Creativity in implementation
