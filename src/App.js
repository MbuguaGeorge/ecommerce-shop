import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/layout/Header';

class App extends React.Component {
   render() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
}

export default App;
