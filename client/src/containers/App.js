import React, {Component} from 'react';

import TopBar from '../components/layouts/TopBar/TopBar';
import Header from '../components/Header/Header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar/>
                <Header/>
            </div>
        );
    }
}

export default App;
