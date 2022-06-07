import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/form';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;
