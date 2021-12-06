require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import Init from './Components/Init';

ReactDOM.render(
    <React.StrictMode>
        <Init />
    </React.StrictMode>,
    document.getElementById('root')    
    );