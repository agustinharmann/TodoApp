import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import './styles.css';

const Status = () => {

  const { totalTodos, completedTodos, incompleteTodos } = useContext(UserContext);

  return (
    <div className='status'>
      <p className='title--status'>
        Total tasks: {totalTodos}
      </p>
      <p className='title--status'>
        Completed tasks: {completedTodos}
      </p>
      <p className='title--status'>
        Pendeing tasks: {incompleteTodos}
      </p>
    </div>
  );
};

export { Status };
