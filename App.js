import React from 'react';
import ReactDOM from 'react-dom/client';

// React element
const heading = <h1 className='heading'>THis is react element</h1>;
console.log('🚀 ~ file: App.js:2 ~ heading:', heading);

const Heading = () => <h1>This is react component</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
