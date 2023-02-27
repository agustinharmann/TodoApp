import React from 'react';
import { TodoItem } from '../TodoItem';
import './styles.css';

const TodoList = ({ searchedTodos }) => {

  return (
    <div className='todolist'>
      {
        searchedTodos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
          />)
      }
    </div>
  );
};

export { TodoList };
