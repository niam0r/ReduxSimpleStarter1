import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/SearchBar';
// import VideoDetail from './components/VideoDetail';
// import VideoList from './components/VideoList';
// import VideoListItem from './components/VideoListItem';

const API_KEY = 'AIzaSyAJWmuzWJQmD9p7h3N1GYcVsTL0M3P4_N8';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
};

ReactDom.render(<App />, document.querySelector('.container'));
