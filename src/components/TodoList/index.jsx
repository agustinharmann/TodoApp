import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { TodoItem } from '../TodoItem';
import './styles.css';

const TodoList = () => {

  const { searchedTodos } = useContext(UserContext);

  return (
    <section className='todo-list'>
      {
        searchedTodos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
          />)
      }
    </section>
  );
};

export { TodoList };
