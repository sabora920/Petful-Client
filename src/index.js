import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/dashboard';
import registerServiceWorker from './registerServiceWorker';
import dogs from './dogs.js'
import cats from './cats.js'

console.log(dogs, cats)

ReactDOM.render(
    <Dashboard catsToAdopt={ cats[0] } dogsToAdopt={ dogs[0] } />, 
    document.getElementById('root')
);
registerServiceWorker();
