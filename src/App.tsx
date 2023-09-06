import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <h1>User</h1>
      <User />
    </div>
  );
}

export default App;
