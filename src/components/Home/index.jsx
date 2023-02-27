import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { TodoList } from '../TodoList';
import { TodoAdd } from '../TodoAdd';
import { GoPlus } from 'react-icons/go';
import './styles.css';

const Home = () => {

  const { searchedTodos, modalAdd, setModalAdd, totalTodos, completedTodos, incompleteTodos } = useContext(UserContext);

  return (
    <div className='home '>
      <div className='todo_counter--home'>
        <p className='title'>
          Total tasks: {totalTodos}
        </p>
        <p className='title'>
          Completed tasks: {completedTodos}
        </p>
        <p className='title'>
          Pendeing tasks: {incompleteTodos}
        </p>
      </div>
      <TodoList searchedTodos={searchedTodos} />
      <TodoAdd />
      <div className={modalAdd ? `disable` : `container_btn-drop--todoadd`}>
        <button
          className='btn_drop-modal--todoadd'
          onClick={() => setModalAdd(!modalAdd)}
        >
          <GoPlus className='icon_drop-modal--todoadd' />
        </button>
      </div>
    </div>
  );
};

export { Home };
