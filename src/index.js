import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'
import './index.css';
import './Animation.css';
import App from './App';
import About from './About';
import Ministries from './Ministries';
import Sermons from './Sermons';
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Events from './Events';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/ministries',
    element: <Ministries />
  },
  {
    path: '/sermons',
    element: <Sermons />
  }
  ,
  {
    path: '/events',
    element: <Events />
  },
])

ReactDOM.render( // Use ReactDOM.render instead of ReactDOM.createRoot
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
