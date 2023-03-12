import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';

// PASARLE SU CSS

const Status = () => {

  const { totalTodos, completedTodos, incompleteTodos } = useContext(UserContext);


  return (
    <div className='todo_counter--home'>
      <p className='title'>
        Total tasks: {totalTodos}
      </p>
      <p className='title'>
        Completed tasks: {completedTodos}
      </p>
      <p className='title'>
        Pendeing tasks: {incompleteTodos}
      </p>
    </div>
  );
};

export { Status };
