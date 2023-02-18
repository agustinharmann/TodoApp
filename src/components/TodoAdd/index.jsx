import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const TodoAdd = () => {

  const { description, onInputChange, onFormSubmit, addTodo } = useContext(UserContext);
  
  return (
    <div className='todoadd'>
      <form onSubmit={onFormSubmit} className='form--todoadd'>
        <input
          className='input--todoadd'
          type='text'
          placeholder='Add TODO...'
          name='description'
          onChange={onInputChange}
          value={description}
        />
        <button
          className='btn--todoadd'
          type='submit'
          onClick={addTodo}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export { TodoAdd };
