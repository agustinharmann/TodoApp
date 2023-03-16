import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { IoCloseSharp } from 'react-icons/io5';
import './styles.css';

const TodoAdd = () => {

  const { description, todoAdd, setTodoAdd, onInputChange, onFormSubmit, onResetForm, theme } = useContext(UserContext);

  return (
    <section className={!todoAdd ? 'disable-todo-add' : 'todo-add'}>
      <form
        className={`form_dark--todo-add ${theme && 'form_light--todo-add'}`}
        onSubmit={onFormSubmit}>
        <div className='container-btn-close--todo-add'>
          <button
            className='btn-close--todo-add'
            onClick={() => setTodoAdd(!todoAdd)}
          >
            <IoCloseSharp className='icon-btn-close--todo-add' />
          </button>
        </div>
        <div className='container-input--todo-add'>
          <input
            className='input--todo-add'
            type='text'
            autoComplete='off'
            placeholder='Add task...'
            name='description'
            onChange={onInputChange}
            value={description}
          />
          <button
            className='btn-reset_input--todo-add'
            onClick={onResetForm}
          >
            X
          </button>
        </div>
        <button
          className='btn-add--todo-add'
          type='submit'
        >
          Create
        </button>
      </form>
    </section>
  );
};

export { TodoAdd };
