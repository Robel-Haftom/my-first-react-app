import React from 'react';
import ReactDOM from 'react-dom/client';
import GuessNumberApp from './GuessNumberApp'
import ColorApp from './ColorApp';
import UserPostCommentApp from './UserPostCommentApp';
import { Routes } from 'react-router-dom';
import RoutingApp from './RoutingApp';

import { BrowserRouter } from 'react-router-dom';
import BookStoreApp from './BookStoreApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        {/* <GuessNumberApp /> */}
        {/* < ColorApp /> */}
        {/* <UserPostCommentApp /> */}
        {/* <BrowserRouter>
          <RoutingApp />
        </BrowserRouter> */}
        <BrowserRouter>
          <BookStoreApp />
        </BrowserRouter>
  </React.StrictMode>
);

