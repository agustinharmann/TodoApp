import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { IoCloseSharp } from 'react-icons/io5';
import './styles.css';

const TodoAdd = () => {

  const { description, modalAdd, setModalAdd, onInputChange, onFormSubmit, addTodo } = useContext(UserContext);

  return (
    <div className={!modalAdd ? 'disable' : 'todoadd'}>
      <form onSubmit={onFormSubmit} className='form--todoadd'>

        <div className="container_btn-close--todoadd">
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
