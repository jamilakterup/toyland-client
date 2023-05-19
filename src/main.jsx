import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import router from './components/Routes/Routes';
import AuthProvider from './components/Providers/AuthProvider';
import {Toaster} from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
