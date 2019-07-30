# React

## Resources
- https://reactjs.org/
- https://jscomplete.com/learn/why-react
- https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents
- https://www.freecodecamp.org/news/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6/
- https://around25.com/blog/an-introduction-to-react-vs-react-native/
- https://github.com/MoonHighway/learning-react/tree/master/chapter-02

## Task 1
- Go to [gitlab.com](https://gitlab.com/) and create a repository named `internship-2019`
- Clone the project from git
- Create a new [react app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- Push the new created project to git

## Task 2
- [Add SCSS](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet) to your project
- [Add React Router](https://reacttraining.com/react-router/web/guides/quick-start) to your project
- Declare the `home` route
- Create a `Header` component with a logo and a navigation
- Create a new `/contact` route and add a minimal `SCSS` styling to it
- Add links to `Header`: `Home`, `Contact` (for now)
- > Optional: create a template that will contain the header with navigation and a content and use it on the website pages that you have and will create

## Task 3
- [Add React Bootstrap](https://react-bootstrap.github.io/) to your project
- > *Optional*: use Bootstrap v4
- Use Bootstrap elements in the rest of the project

## Task 4
- Create a new `/people` route and add a link to it in the `Header` component. Don't forget to add the `Header` component onto every page if you have not implemented a Template component
- Fetch a list of people from Star Wars API: `https://swapi.co/api/people/` an display the data. Display only the `name` attribute
- Add an input on top of the list with an `Add` button
- Implement the add to list feature
- Add a new input below the first one and use it to add a search feature
- Add a `remove item` feature in-line of each entry in the list

## Task 5 - Optional
- Instead of doing the API call for data retrieval directly the screen component, externalize this logic into a `Service`:
- Create a `api` dir inside src
- Create a `services/` folder and make a `star-wars.js` file
- Write and export an `API object` that is using a third party library for fetching the data from API. *baseURL will be `https://swapi.co/api/`*
- Create an `sw.js` file in the `api/` folder. Here, create a `getPeople()` function that makes the API call using the `API object` from `services/star-wars.js` and returns the result data
- Import `sw.js` as `swAPI` in the component and using the `getPeople`function, fetch the data

## Task 6
- Info: this will be the `Homepage`
- Take a look at the [Wikipedia API](https://en.wikipedia.org/api/rest_v1/). We'll use it to get all kinds of data from Wikipedia and display it in our app.
- Fetch the "on this day" events using a third party library (I recommend: `apisauce`, `superagent`)
- List the data following this structure:
```html
<div>
    <h3>Object key</h3>
    <ul>
        <li>item year - item text</li>
        <li>item year - item text</li>
        <li>item year - item text</li>
        ...
    </ul>
    <h3>Object key</h3>
    <ul>
        <li>item year - item text</li>
        <li>item year - item text</li>
        <li>item year - item text</li>
        ...
    </ul>
    ...
</div>
```

> Use the fetch API and get data from the following endpoint `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/mm/dd`.

## Task 7
- Add 5 radio buttons: `Selected, Births, Deaths, Holidays, Events`
- Add a `Reset` button
- Filter the events by the radio buttons
- Display all the events again when clicking on the `Reset button`

## Task 8
- Create a new `/tic-tac-toe` route and add a link to it in the `Header` component
- Implement tic-tac-toe `Solo Play` game mode
- Optional: Before beginning the game, add a new step with 2 buttons: `Solo Play` and `Computer Play`. Link the `Solo Play` with the previous implemented features and make also `Computer Play` mode functional

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

## Task 9
- Create a new `/card-game` route and add a link to it in the `Header` component
- Create a card flip memory game. [Example](https://www.webgamesonline.com/memory/)
- Make 4 rows with 4 cards on each row
- Add a `Reset` button
- Design is up to you

The `Card` component will have the following structure:
```json
{
    "id": 1,
    "image": "http://img.test",
    "show": true
}
```

Optional: You can use this game state to get started:
```js
this.state = {
  isFlipped: new Array(16).fill(false), // array with position of the elements. In order to know which element is flipped
  shuffledCards: [], // array with card objects
  prevCard: -1, // need to know the previous card to check the match
  prevCardIndex: -1, // need to know previous card index to check the match
  clickCount: 1, // we have to count the clicks
};
```

- Use local images or use an open API to generate the image of the cards


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
- Create a `reducer` for the "people" list data. Fetch the data using `actions`

## Task 3
- Add `redux` for the 2 games
