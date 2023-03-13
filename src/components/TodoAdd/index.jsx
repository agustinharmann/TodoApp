import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { IoCloseSharp } from 'react-icons/io5';
import './styles.css';

const TodoAdd = () => {

  const { description, modalAdd, setModalAdd, onInputChange, onFormSubmit, addTodo, theme } = useContext(UserContext);

  return (
    <section className={!modalAdd ? 'disable' : 'todoadd'}>
      {/* agregar el coso ese de html que dice para q sirve el form */}
      <form onSubmit={onFormSubmit} className={`form--todoadd ${ theme && 'form-ligth_mode--todoadd' }`}>
        <div className='container_btn-close--todoadd'>
          <button
            className='btn_close-modal--todoadd'
            onClick={()=>setModalAdd(!modalAdd)}
          >
            <IoCloseSharp className='icon_close-modal--todoadd' />
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
          className='btn--todoadd'
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
