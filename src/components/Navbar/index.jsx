import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './styles.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <form className='form_navbar--header'>
        <input className='input_navbar--header' type='text' placeholder='Buscar..' />
        <button className='btn_navbar--header'>
          <BsSearch className='icon_search-navbar--header' />
        </button>
      </form>
    </div>
  );
};

export { Navbar };
