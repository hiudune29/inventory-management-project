import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    {/*<Route path={'login'} element={<Login />} />*/}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;