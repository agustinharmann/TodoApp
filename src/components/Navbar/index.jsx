import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const Navbar = () => {

  const { serch, onSearchTodo } = useContext(UserContext);

  return (
    <div className='navbar'>
      <form className='form_navbar--header'>
        <input
          className='input_navbar--header'
          type='text'
          placeholder='Buscar..'
          value={serch}
          onChange={onSearchTodo}
        />
        <button className='btn_navbar--header'>
          <BsSearch className='icon_search-navbar--header' />
        </button>
      </form>
    </div>
  );
};

export { Navbar };
