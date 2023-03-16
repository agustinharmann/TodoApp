import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import logo__app from '../../assets/logo__app.png';
import { Navbar } from '../Navbar';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs'
import './styles.css';

const Header = () => {

  const { theme, setTheme } = useContext(UserContext);

  return (
    <header className={`header_dark--header ${theme && 'header_light--header'}`}
    >
      <div className='container-logo--header'>
        <img className='logo-app--header' src={logo__app} alt='Logo TodoApp' />
      </div>
      <Navbar />
      <section className='container-theme--header'>
        <div className={`container-btn-theme_dark--header ${theme && 'container-btn-theme_light--header'}`}
        >
          <button className='btn-theme--header'
            onClick={() => setTheme(!theme)}
          >
            {
              theme ? <BsSun className='icon-btn-theme--header' /> : <BsMoon className='icon-btn-theme--header' />
            }
          </button>
        </div>
      </section>
    </header>
  );
};

export { Header };
