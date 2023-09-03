import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
import './resume/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './resume/App.jsx';
import DownloadResume from './resume/DownloadResume.jsx';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "download",
      element: <DownloadResume />,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );