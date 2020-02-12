import React from 'react';
import Header from './components/Header';
import './styles.css'
import Api from './services/api';
import Main from './pages/main/index';

const App = () => (
    <div className="App">
        <Header />
        <Main />
    </div >
);

export default App;