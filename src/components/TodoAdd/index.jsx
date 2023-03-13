import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { IoCloseSharp } from 'react-icons/io5';
import './styles.css';

const TodoAdd = () => {

  const { description, modalAdd, setModalAdd, onInputChange, onFormSubmit, addTodo, theme } = useContext(UserContext);

  return (
    <section className={!modalAdd ? 'disable-todoadd' : 'todoadd'}>
      <form
        className={`form--todoadd ${theme && 'form_ligth--todoadd'}`}
        onSubmit={onFormSubmit}>
        <div className='container-btn-close--todoadd'>
          <button
            className='btn-close--todoadd'
            onClick={() => setModalAdd(!modalAdd)}
          >
            <IoCloseSharp className='icon-btn-close--todoadd' />
          </button>
        </div>
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
          className='btn-add--todoadd'
          type='submit'
          onClick={addTodo}
        >
          Create
        </button>
      </form>
    </section>
  );
};

export { TodoAdd };
