import React from 'react';
import './App.css';
import Main from './components/Main';
import Footer from './components/footer';
import Header from './components/header';

class App extends React.Component {
   render() {
  return (
    <div>
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}
}

export default App;
