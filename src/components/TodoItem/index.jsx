import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './styles.css';

const TodoItem = ({ todo }) => {

  const { delteTodo, completeTodo, theme } = useContext(UserContext);

  return (
    <li className={`todo-item--todo-item ${theme ? 'todo-item_light--todo-item' : 'todo-item_dark--todo-item'}`}>
      <button
        className='btn--todo-item check--todo-item'
        onClick={() => completeTodo(todo.id)}
      >
        <AiOutlineCheck className='icon_check--todo-item' />
      </button>

      <p className={`text--todo-item ${todo.done ? 'todo-completed--todo-item' : ''}`}>
        {todo.description}
      </p>

      <button
        className='btn--todo-item delete--todo-item'
        onClick={() => delteTodo(todo.id)}
      >
        <AiOutlineClose className='icon_delete--todo-item' />
      </button>
    </li>

  );
};

export { TodoItem };
