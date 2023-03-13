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
      <div className={modalAdd ? `disable` : `container_btn-drop--todoadd`}>
        <button
          className='btn_drop-modal--todoadd'
          onClick={() => setModalAdd(!modalAdd)}
        >
          <GoPlus className='icon_drop-modal--todoadd' />
        </button>
      </div>
    </main>
  );
};

export { Home };
