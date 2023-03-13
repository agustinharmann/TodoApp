import React, { useContext } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { UserContext } from '../../utils/userProvider';
import './styles.css';

const TodoItem = ({todo}) => {
  const { delteTodo, completeTodo, theme } = useContext(UserContext);

  return (
    <section className={`todoitem ${ theme && 'todoitem_ligth--todoitem' }`}>
      <button
        className='btn--todoitem check--todoitem'
        onClick={()=>completeTodo(todo.id)}
      >
        <AiOutlineCheck className='icon_check--todoitem' />
      </button>

      <p className={`text--todoitem ${ todo.done && 'todo-completed--todoitem'}`}>
        {todo.description}
      </p>

      <button
        className='btn--todoitem delete--todoitem'
        onClick={()=>delteTodo(todo.id)}
      >
        <AiOutlineClose className='icon_delete--todoitem' />
      </button>
    </section>

  );
};

export { TodoItem };
