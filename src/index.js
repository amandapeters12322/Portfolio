import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//The above stores all our subcomponents and React for our app
//the render finds anything with the id='root' and replaces it with everything that is inside App.jsx file function. See App is imported from above
