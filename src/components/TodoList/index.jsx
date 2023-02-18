import React from 'react';
import { TodoItem } from '../TodoItem';
import './styles.css';

const TodoList = ({ todos = [] }) => {
  return (
    <div className='todolist'>
      {
        todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
          />)
      }
    </div>
  );
};

export { TodoList };
