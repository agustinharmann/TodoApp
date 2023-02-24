import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { TodoList } from '../TodoList';
import { TodoAdd } from '../TodoAdd';
import { TiPlus } from 'react-icons/ti';
import './styles.css';

const Home = () => {

  const { todos, modalAdd, setModalAdd } = useContext(UserContext);

  return (
    <div className='home '>
      <div className='todo_counter--home'>
        <h1 className='title'>Todos...</h1>
      </div>
      <TodoList todos={todos} />
      <TodoAdd />
      <div className={ modalAdd ? `disable` :`container_btn-drop--todoadd` }>
        <button
          className='btn_drop-modal--todoadd'
          onClick={()=>setModalAdd(!modalAdd)}
        >
          <TiPlus className='icon_drop-modal--todoadd' />
        </button>
      </div>
    </div>
  );
};

export { Home };
