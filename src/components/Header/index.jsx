import React, { useContext } from 'react';
import { UserContext } from '../../utils/userProvider';
import logo__app from '../../assets/logo__app.png';
import { Navbar } from '../Navbar';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs'
import './styles.css';

const Header = () => {

  const { theme, setTheme } = useContext(UserContext);

  return (
    <header className={`header ${theme && 'header__ligth'}`}>
      <div className='container_logo--header'>
        <img className='logo__app' src={logo__app} alt='Logo TodoApp' />
      </div>
      <Navbar />
      <section className='container_menu--header'>
        {/* cambiar la clase de menu en el css */}
        <div onClick={() => setTheme(!theme)} className={`cotainer_menu--header ${theme && 'cotainer_menu-rigth--header'}`}>
          <div className="redondito">
            {/* cambiar la clase de redondito en el css */}
            {
              theme ? <BsSun className='sun-ligth_mode--header' /> : <BsMoon className={'sun-ligth_mode--header'} />
            }
          </div>
        </div>
      </section>
    </header>
  );
};

export { Header };
