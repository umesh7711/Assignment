import React, { useState } from 'react';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div>
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Register />
        </>
      ) : (
        <Dashboard token={token} />
      )}
    </div>
  );
}

export default App;
