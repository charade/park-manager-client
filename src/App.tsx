import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginView, Home } from './views';

function App() {
  return (
    <Router >
        <Routes>
            <Route path ='/' element = { <LoginView /> }/>
            <Route path = {'/home'} element = { <Home /> }/>
        </Routes>
    </Router>
  );
}

export default App;
