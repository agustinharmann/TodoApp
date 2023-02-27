import React, { useContext } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const TodoItem = ({todo}) => {
  const { delteTodo, completeTodo, theme } = useContext(UserContext);

  return (
    <div className={`todoitem ${ theme && 'ligth_todoitem' }`}>
      <button
        className='btn--todo_item check'
        onClick={()=>completeTodo(todo.id)}
      >
        <AiOutlineCheck className='icon_check--todo_item' />
      </button>

      <p className={`text--todo_item ${todo.done && 'text--todo_item completed'}`}>
        {todo.description}
      </p>

      <button
        className='btn--todo_item delete'
        onClick={()=>delteTodo(todo.id)}
      >
        <AiOutlineClose className='icon_delete--todo_item' />
      </button>
    </div>

  );
};

export { TodoItem };
