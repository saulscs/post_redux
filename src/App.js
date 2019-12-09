import React from 'react';
import Post from './components/post'
import PostForm from './components/postForm';
import {Provider } from 'react-redux';
import store from './store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>LEARNING REDUX</h1>
      <PostForm/>
      <hr></hr>
      <Post/>
      
    </div>
    </Provider>
  );
}

export default App;
