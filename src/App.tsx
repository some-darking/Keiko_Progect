import React from 'react'
import "./index.scss";
import Header from './components/Header/Header'
import Home from './components/Home/Content'
import Footer from './components/Footer/Footer';

const App: React.FC = () => {//: JSX.Element | null 
  return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  };
export default App;
