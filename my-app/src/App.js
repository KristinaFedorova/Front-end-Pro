import React from "react";
import Navbar from "./components/Navbar/navbar";
import './App.css';
import SideBar from './components/aside/aside'
import MainPage from "./components/main/main";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className='info'>
                <SideBar/>
                <MainPage/>
            </div>
        </div>
    );
}

export default App;
