import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { IoCloseSharp } from 'react-icons/io5';
import './styles.css';

const TodoAdd = () => {

  const { description, todoAdd, setTodoAdd, onInputChange, onFormSubmit, onResetForm, theme } = useContext(UserContext);

  return (
    <section className={!todoAdd ? 'disable-todoadd' : 'todoadd'}>
      <form
        className={`form--todoadd ${theme && 'form_ligth--todoadd'}`}
        onSubmit={onFormSubmit}>
        <div className='container-btn-close--todoadd'>
          <button
            className='btn-close--todoadd'
            onClick={() => setTodoAdd(!todoAdd)}
          >
            <IoCloseSharp className='icon-btn-close--todoadd' />
          </button>
        </div>
        <div className='container-input--todoadd'>
          <input
            className='input--todoadd'
            type='text'
            autoComplete='off'
            placeholder='Add task...'
            name='description'
            onChange={onInputChange}
            value={description}
          />
          <button
            className='btn-reset_input--todoadd'
            onClick={onResetForm}
          >
            X
          </button>
        </div>
        <button
          className='btn-add--todoadd'
          type='submit'
        >
          Create
        </button>
      </form>
    </section>
  );
};

export { TodoAdd };
