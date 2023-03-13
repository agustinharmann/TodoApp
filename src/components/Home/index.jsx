import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import { Status } from '../Status';
import { TodoList } from '../TodoList';
import { TodoAdd } from '../TodoAdd';
import { GoPlus } from 'react-icons/go';
import './styles.css';

const Home = () => {

  const { modalAdd, setModalAdd } = useContext(UserContext);

  return (
    <main className='home'>
      <Status />
      <TodoList />
      <TodoAdd />
      <div className={modalAdd ? `disable-todoadd` : `container-btn-drop_todoadd--home`}>
        <button
          className='btn-drop_todoadd--home'
          onClick={() => setModalAdd(!modalAdd)}
        >
          <GoPlus className='icon-drop_todoadd--home' />
        </button>
      </div>
    </main>
  );
};

export { Home };
