import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {}, 'Hello World');
console.log('🚀 ~ file: App.js:2 ~ heading:', heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
