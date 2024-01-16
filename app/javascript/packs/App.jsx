import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Greeting} />
      {/* other routes */}
    </Router>
  );
};

export default App;
