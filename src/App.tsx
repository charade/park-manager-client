import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,Outlet  } from "react-router-dom";
import { Admin, Home, AuthFailed } from './views';
import { Provider } from 'react-redux';
import { store } from './state';

const Private = () => {
  const auth = localStorage.getItem('auth');
  return auth ? <Outlet /> : <Navigate to = '/'/> 
};

function App() {
  return (
    <Provider store = { store }>
      <Router>
        <Routes>
          <Route path ='/' element = { <Admin /> }/>
          <Route element = { <Private/>} >
              <Route path = 'home' element = { <Home /> }/>
          </Route>
          {/* handle redirect user to log if authentication failed when connected */}
          <Route path = '/redirect' element = { <AuthFailed /> }/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
