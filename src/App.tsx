import React, { useLayoutEffect } from 'react';
import './App.css';
import Transferencias from './components/TransferenciasComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // Logic to handle JWT from URL and localStorage
  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const jwtToken = params.get("jwt");
    const refreshToken = params.get("rf");
    const IdApp = params.get("IdApp");

    if (jwtToken && refreshToken && IdApp) {
      localStorage.setItem("jwtToken", jwtToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("IdApp", IdApp);
      // Here you could add more logic to handle session continuation,
      // like redirecting the user or fetching user data
    }
  }, []);

  // Your app's route structure
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Transferencias />} />
          {/* More routes can be added here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
