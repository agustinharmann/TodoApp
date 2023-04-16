import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import logo_web from '../../assets/logo_web.png';
import { Navbar } from '../Navbar';
import { BsSun, BsMoon } from 'react-icons/bs';
import './styles.css';

const Header = () => {

  const { theme, setTheme } = useContext(UserContext);

  return (
    <header className={`header ${theme ? 'header_light--header' : 'header_dark--header'}`}
    >
      <div className='container-logo--header'>
        <img className='logo-app--header' src={logo_web} alt='Logo TodoApp' />
      </div>
      <Navbar />
      <section className='container-theme--header'>
        <button className={`container-btn-theme--header ${theme ? 'container-btn-theme_light--header' : 'container-btn-theme_dark--header'}`}
          onClick={() => setTheme(!theme)}
        >
          <div className='btn-theme--header'
          >
            {
              theme ? <BsSun className='icon-btn-theme--header' /> : <BsMoon className='icon-btn-theme--header' />
            }
          </div>
        </button>
      </section>
    </header>
  );
};

export { Header };
