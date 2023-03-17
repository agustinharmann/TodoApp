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
      {
        todoAdd ? <TodoAdd /> :
          <div className='container-btn-drop_todo-add--home'>
            <button
              className='btn-drop_todo-add--home'
              // disabled={!todoAdd}
              onClick={() => setTodoAdd(true)}
            >
              <GoPlus className='icon-drop_todo-add--home' />
            </button>
          </div>
      }
    </main>
  );
};

export { Home };
