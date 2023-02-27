import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const Navbar = () => {

  const { search, onInputTodoChange } = useContext(UserContext);

  return (
    <div className='navbar'>
      <form className='form_navbar--header'>
        <input
          className='input_navbar--header'
          type='text'
          placeholder="Search To do..."
          value={search}
          onChange={onInputTodoChange}
        />
      </form>
    </div>
  );
};

export { Navbar };
