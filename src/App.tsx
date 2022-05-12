import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './state'
import RepositoriesList from './components/RepositoriesList';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <h1>Hi there</h1>
        <h1>Search for repository</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
