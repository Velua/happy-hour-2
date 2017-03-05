# Happy Hour 2!
Happy Hour is a project to tell you when is happy hour at local bars in Melbourne and what their deals are.

## How it works
This is still a WIP, Node folder runs an API endpoint on the local machine.
React folder contains react project which axios performs a get request to download the bars into an array.
Each bar in the array contains a Google Place ID which performs a get request to Google Maps ID and downloads opening hours, address & etc.
Data is then rendered on the page with React.

## Install
Warning: Access-Control-Allow-Origin needs to be disabled to render.


    git clone  https://github.com/Velua/happy-hour-2.git

    npm install
in both node project & react project

   npm start dev
in React folder

    npm start
in Node folder
