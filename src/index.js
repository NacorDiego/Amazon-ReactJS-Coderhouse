import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBBJcGcSGWLFMRWEP9mZA93-kgXhKJ0hE",
  authDomain: "coderhouse-reactjs-acdbd.firebaseapp.com",
  projectId: "coderhouse-reactjs-acdbd",
  storageBucket: "coderhouse-reactjs-acdbd.appspot.com",
  messagingSenderId: "409053569876",
  appId: "1:409053569876:web:09e8dce710bb42732cdec1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
