import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Page404 from './components/Page404';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import AboutUs from './components/AboutUs/AboutUs';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Page404 />,
//     children: [
//       {
//         path: '/about',
//         element: <AboutUs />,
//       },
//     ],
//   },
//   {
//     path: 'books/:bookId',
//     element: '<<Contact />>',
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
