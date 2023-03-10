import React, { useContext } from 'react';
import logo__app from '../../assets/logo__app.png';
import { Navbar } from '../Navbar';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs'
import './styles.css';
import { UserContext } from '../../utils/userProvider';

const Header = () => {

  const { theme, setTheme } = useContext(UserContext);

  return (
    <header className={`header ${theme && 'header__ligth'}`}>
      <div className='container_logo--header'>
        <img className='logo__app' src={logo__app} alt="Logo TodoApp" />
      </div>
      <Navbar />
      <div className='container_menu--header'>
        <div onClick={() => setTheme(!theme)} className={`cotainer_menu--header ${theme && 'cotainer_menu-rigth--header'}`}>
          <div className="redondito">
            {
              theme ? <BsSun className='sun-ligth_mode--header' /> : <BsMoon className={'sun-ligth_mode--header'} />
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
