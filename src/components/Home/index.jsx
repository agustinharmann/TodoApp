import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { TodoList } from '../TodoList';
import { TodoAdd } from '../TodoAdd';
import './styles.css';

const Home = () => {

  const { todos } = useContext(UserContext);

  return (
    <div className='home'>
      <TodoList todos={ todos }/>
      <TodoAdd />
    </div>
  );
};

export { Home };
