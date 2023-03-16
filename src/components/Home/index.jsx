import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { Status } from '../Status';
import { TodoList } from '../TodoList';
import { TodoAdd } from '../TodoAdd';
import { GoPlus } from 'react-icons/go';
import './styles.css';

const Home = () => {

  const { todoAdd, setTodoAdd } = useContext(UserContext);

  return (
    <main className='home'>
      <Status />
      <TodoList />
      <TodoAdd />
      <div className={todoAdd ? `disable-todo-add` : `container-btn-drop_todo-add--home`}>
        <button
          className='btn-drop_todo-add--home'
          onClick={() => setTodoAdd(!todoAdd)}
        >
          <GoPlus className='icon-drop_todo-add--home' />
        </button>
      </div>
    </main>
  );
};

export { Home };
