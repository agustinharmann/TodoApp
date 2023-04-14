import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { Status } from '../Status';
import { TodoList } from '../TodoList';
import { TodoAdd } from '../TodoAdd';
import { GoPlus } from 'react-icons/go';
import './styles.css';

const Home = () => {

  const { searchedTodos, todoAdd, setTodoAdd } = useContext(UserContext);

  return (
    <main className='home'>
      <Status />
      { searchedTodos.length ? <TodoList /> : null}
      {
        todoAdd ? <TodoAdd /> :
          <article className='container-btn-drop_todo-add--home'>
            <button
              className='btn-drop_todo-add--home'
              onClick={() => setTodoAdd(true)}
            >
              <GoPlus className='icon-drop_todo-add--home' />
            </button>
          </article>
      }
    </main>
  );
};

export { Home };
