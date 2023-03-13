import { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';

// PASARLE SU CSS

const Status = () => {

  const { totalTodos, completedTodos, incompleteTodos } = useContext(UserContext);


  return (
    <section className='todo_counter--home'>
      {/* cambiar clases de los p, cambiar clase "--home" */}
      {/* traer lo estilos de status a este css */}
      <p className='title'>
        Total tasks: {totalTodos}
      </p>
      <p className='title'>
        Completed tasks: {completedTodos}
      </p>
      <p className='title'>
        Pendeing tasks: {incompleteTodos}
      </p>
    </section>
  );
};

export { Status };
