This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design Changes Justification

For the opening crawl of each movie, I made it scrollable because I want to prevent
the text from overflowing outside the container, and I also think it looks better
design-wise.

I've added a welcome page because I thought it would be a good idea to have a little
introduction to what this web applicaiton will be about.

I've changed the button "view" to "view characters" so that it's more straightforward
to users that they will be redirected to a page with a list of characters. A button
"back to home" is also added as a feature, for better navigation through the web app.

## Limitations

I'm not too sure why it takes so long to fetch data from the api. Therefore, loading
the character list and list of episode might take a bit of time. IHowever, I've added
a loading icon there to show audience that the page is still loading, and it is working.
