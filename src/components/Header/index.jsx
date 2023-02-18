import React from 'react';
import { Navbar } from '../Navbar';
import './styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='container_logo--header'></div>
      <Navbar />
      <div className='container_menu--header'></div>
    </div>
  );
};

export { Header };
