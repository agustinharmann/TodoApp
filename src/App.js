import React from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
// import { Footer } from './components/Footer';
import { UserProvider } from './utils/userProvider';
import './App.css';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Home />
        {/* <Footer /> */}
      </UserProvider>
    </div>
  );
};

export default App;
