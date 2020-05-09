import React from 'react';

import { Router } from '@reach/router';
import Home from "./components/Home";
import Number from "./components/Number";
import Hello from "./components/Hello";
import WordColor from "./components/WordColor";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Number path="/:id" />
        <Hello path="/hello/:word" />
        <WordColor path="/:word/:txt/:bg" />
      </Router>

    </div>
  );
}

export default App;
