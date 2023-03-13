import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const Navbar = () => {

  const { search, onInputTodoChange } = useContext(UserContext);

  return (
    <nav className='navbar'>
      {/* agregar el coso ese de html que dice para q sirve el form */}
      {/* form--navbar */}
      <form className='form_navbar--header'>
        <input
          className='input_navbar--header'
          type='text'
          placeholder='Search To do...'
          value={search}
          onChange={onInputTodoChange}
        />
      </form>
    </nav>
  );
};

export { Navbar };
