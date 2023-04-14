import React, { useContext } from 'react';
import { UserContext } from '../../useContext/userProvider';
import { BsCodeSlash, BsGithub, BsLinkedin  } from 'react-icons/bs';
import './styles.css';

const Footer = () => {

  const { theme } = useContext(UserContext);

  return (
    <footer className={`footer ${theme ? 'footer_light--footer' : 'footer_dark--footer'}`}>
      <section className='container-section--footer'>
        <div className='column--footer'>
          <a className='info--footer' href='https://github.com/agustinharmann/TodoApp' target='_blank' rel='noreferrer'>
            <BsCodeSlash className='icon--footer' />
            View the code
          </a>
        </div>
        <div className='column--footer'>
          <a className='info--footer' href='https://www.linkedin.com/in/agustin-harmann-1a4794269/' target='_blank' rel='noreferrer'>
            <BsLinkedin className='icon--footer' />
            Linkedin
          </a>
          <a className='info--footer' href='https://github.com/agustinharmann' target='_blank' rel='noreferrer'>
            <BsGithub className='icon--footer' />
            Github
          </a>
        </div>
      </section>
      <section className='container-section--footer'>
        <p className='content-second-section--footer'>Powered by agustinharmann</p>
      </section>
    </footer>
  );
};

export { Footer };
