import React, {Component} from 'react';

import TopBar from '../components/layouts/TopBar/TopBar';
import MainContent from '../components/layouts/MainContent/MainContent';
import Header from '../components/Header/Header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar/>
                <Header/>
                <MainContent/>
            </div>
        );
    }
}

export default App;
