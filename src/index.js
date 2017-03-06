import React from 'react';
import ReactDOM from 'react-dom';
import City from './City';
import './index.css';
import { BrowserRouter, Match, Miss } from 'react-router';
import NotFound from './components/NotFound';
import PickCity from './containers/PickCity';

const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
  return (
    <BrowserRouter basename={repo}>
      <div>
        <Match exactly pattern="/" component={PickCity}/>
        <Match exactly pattern="/melbourne" component={City}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
