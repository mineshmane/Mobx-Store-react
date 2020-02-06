import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import {decorate, observable, action, computed} from 'mobx';
import Store from './Store';
import Data from './components/data'
import CreateNote from './components/createnote'
decorate(Store, {
  reviewList: observable,
  addReview: action,
  averageScore: computed,
  reviewCount: computed
});
const reviewStore = new Store();


function App() {
  return (
    <div className="container">
      <CreateNote store={reviewStore}/>
        <Form store={reviewStore}/>
        <Dashboard store={reviewStore}/>
        <Reviews store={reviewStore}/>
        <Data store={reviewStore}></Data>
      </div>
  );
}

export default App;
