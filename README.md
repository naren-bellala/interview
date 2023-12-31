# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This was created in 24 hours (timeboxed).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

- Launches the test runner in the interactive watch mode.

### Folder structure

- App follows the [Atomic design pattern](https://atomicdesign.bradfrost.com/)

### API

- BE data is provided by: <https://graphql-pokemon2.vercel.app/>
- uses Graphql queries to fetch data.  

### Favourites

- Using localstorage to mark and unmark your favourite pokemons.
- So the favourites are persistent on refresh.

### Error Boundary

- Added Error boundary to handle the runtime errors. [ErrorBoundary](./src/components/molecules/PokemonErrorBoundary.js)

#### TODO

- Pagination (Currently it only limits to 150 items)
- complete Test coverage

![Preview](https://github.com/naren-bellala/interview/assets/40792222/73fd7175-2b74-48e5-b32b-7bcb5244025a)

