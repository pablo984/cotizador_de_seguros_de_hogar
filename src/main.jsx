import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './AppContext.jsx';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<div>    
    <AppProvider>
        <App/>
    </AppProvider>
</div>
); 
