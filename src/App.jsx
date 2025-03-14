import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/layout.jsx";
import './App.scss';
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={'/'} element={<Dashboard />} />
                    <Route path={'products'} element={<Products />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;