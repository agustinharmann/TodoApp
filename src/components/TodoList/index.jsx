import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { TodoItem } from '../TodoItem';
import './styles.css';

const TodoList = () => {

  const { searchedTodos } = useContext(UserContext);

  return (
    <section className='todolist'>
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
