import React from "react";
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg" alt=""></img>
            </header>
            <nav className="nav">
                <div className="content">
                    <div>
                        Profile
                    </div>
                    <div>
                        Messages
                    </div>
                    <div>
                        Main Content
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default App;
