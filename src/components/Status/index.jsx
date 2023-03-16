import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import './styles.css';

const Status = () => {

  const { totalTodos, completedTodos, incompleteTodos } = useContext(UserContext);

  return (
    <section className='status'>
      <p className='title--status'>
        Total tasks: {totalTodos}
      </p>
      <p className='title--status'>
        Completed tasks: {completedTodos}
      </p>
      <p className='title--status'>
        Pendeing tasks: {incompleteTodos}
      </p>
    </section>
  );
};

export { Status };
