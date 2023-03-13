import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const Navbar = () => {

  const { onFormSubmit, search, onInputTodoChange } = useContext(UserContext);

  return (
    <nav className='navbar'>
      <form
        className='form--navbar'
        onSubmit={onFormSubmit}>
        <input
          className='input--navbar'
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
