import React, {Component} from 'react';

import TopBar from '../components/layouts/TopBar/TopBar';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar/>
                Hello from app
            </div>
        );
    }
}

export default App;
