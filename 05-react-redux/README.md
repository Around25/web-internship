# React

## Resources
- https://reactjs.org/
- https://www.freecodecamp.org/news/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6/
- https://github.com/MoonHighway/learning-react/tree/master/chapter-02

## Task 1
- Go to [gitlab.com](https://gitlab.com/) and create a repository named `on-this-day`
- Clone the project from git
- Create a new [react app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- Push the new created project to git

## Task 2
- [Add SCSS](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet) to your project
- [Add React Router](https://reacttraining.com/react-router/web/guides/quick-start) to your project
- Declare the `home` route
- Create a new `/contact` route and add a minimal `SCSS` styling to it
- Add a button to Homepage that is linking to the `/contact` page

## Task 3
- Take a look at the [Wikipedia API](https://en.wikipedia.org/api/rest_v1/). We'll use it to get all kinds of data from Wikipedia and display it in our app.
- Fetch the "on this day" events
- List the data according to the wireframe (TBD)

> Use the fetch API and get data from the following endpoint `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/mm/dd`.

## Task 4
- Add 6 checkmarks: `All, Selected, Births, Deaths, Holidays, Events`
- Filter the events by the checkmarks. Note: you can't select `All` together with any other filter
- Add an input to the list
- Add search feature to the list using that input
- Add `remove item` feature 

## Task 5
- Create a new git project and name it `tic-tac-toe`
- Add on homepage 2 buttons: `Solo Play`, `Play against Computer`
- Create a new `/game` route that is linked with the homepage buttons
- Implement tic-tac-toe `Solo Play` game mode
- Optional: make `Computer play mode` functional

> Hint: for checking the winner, create an array with all winning position pairs

You can use this game state to get started:
```js
this.state = {
  gameType: 'player', // ENUM('player', 'computer')
  next: 'X',
  board: Array(9).fill(''), // Array with 9 empty string characters
  totalMoves: 0, // there can't be more than 9 moves. Useful for 'draw' result
  winner: null
};
```

## Task 6
- Create a new git project and name it `card-game`
- Create a card flip memory game. [Example](https://www.webgamesonline.com/memory/)
- Make 3 rows with 5 cards on each row
- Optional: add a score
- Design is up to you



# Redux

## Resources
- https://redux.js.org
- https://egghead.io/series/getting-started-with-redux
- https://learnredux.com/
- https://dev.to/selbekk/redux-in-27-lines-2i92

## Task 1
- Read the [motivation](https://redux.js.org/introduction/motivation) behind `redux` architecture
- Watch [Getting started with Redux](https://egghead.io/series/getting-started-with-redux) by Dan Abramov

## Task 2
- Create a `reducer` for the "on this day" events data. Fetch the data using `actions`

## Task 3
- Add `redux` for the 2 games
