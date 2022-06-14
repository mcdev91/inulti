import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './components/FormComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <FormComponent />
      <FooterComponent />
    </div>
  );
}

export default App;