import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {
    let activeStyle = 'activeLink'
    const [showNav, setshowNav] = useState(false)

  return <>
      <header className='container'>
      <div className='profiles_container'>
          <a href='https://github.com/Zana994' target={'_blank'} aria-label='Github profile' rel="noreferrer">
                <span className='github'></span>
          </a>
         <a href='https://www.linkedin.com/in/zanamemic/' target={'_blank'} aria-label='Linkedin profile' rel="noreferrer">
            <span className='linkedin'></span>
         </a>
      </div>
      <div className={showNav ? 'hamburger-nav close' : 'hamburger-nav'} onClick={() => setshowNav((previous) => !previous)}></div>
      <nav className={showNav ? 'show' : ''}>
          <ul>
              <NavLink to='/' className={({isActive}) => isActive ? activeStyle : undefined}>
                    <li onClick={() => setshowNav((previous) => !previous)}>
                        <span className='arrows'></span> about
                    </li>
              </NavLink>
              <NavLink to='projects' className={({isActive}) => isActive ? activeStyle : undefined}>
                    <li onClick={() => setshowNav((previous) => !previous)}>
                        <span className='arrows'></span> projects
                    </li>
              </NavLink>
              <NavLink to='skills' className={({isActive}) => isActive ? activeStyle : undefined}>
                    <li onClick={() => setshowNav((previous) => !previous)}>
                        <span className='arrows'></span> skills
                    </li>
              </NavLink>
              <NavLink to='contact' className={({isActive}) => isActive ? activeStyle : undefined}>
                    <li style={{ marginRight: '0' }} onClick={() => setshowNav((previous) => !previous)}>
                        <span className='arrows'></span> contact
                    </li>
              </NavLink>
          </ul>
      </nav>
      </header>
      <Outlet />
  </>;
};

export default Header;
