import React from 'react';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './styles.css';

const TodoItem = ({todo}) => {
  // console.log(todo);

  const [complete, setComplete] = useState(false);

  const onComplete = () => {
    setComplete(!complete);
  }

  return (
    <div className="todoitem">
      <button
        className='btn--todo_item check'
        onClick={onComplete}
      >
        <AiOutlineCheck className='icon_check--todo_item' />
      </button>

      <p className={complete ? 'text--todo_item completed' : 'text--todo_item'}>
        {todo.description}
      </p>

      <button className='btn--todo_item delete'>
        <AiOutlineClose className='icon_delete--todo_item' />
      </button>
    </div>

  );
};

export { TodoItem };
