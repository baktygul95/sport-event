import {SPORT_CATEGORIES} from '../../__mock/categories';
import {Link} from 'react-router-dom';
import * as React from 'react';
import './index.scss';
import Logo from '../../iaau-logo.png';

export const HeaderComponent = () => {
  return (
    <div className='header-main'>
      <div className='header-block'>
        <span className='header-item'>
          <Link to={'/'}>
            <img className='logo' src={Logo} alt="Logo"/>
          </Link>
        </span>
        {SPORT_CATEGORIES.map(item => (
          <span key={item.id} className='header-item'>
              <Link key={item.id} to={item.url}>
                {item.name}</Link>
          </span>
        ))}
        <span className='header-item'>
          <Link to={'/application-submit'}>
            <button className='application-submit-button'>Application</button>
          </Link>
        </span>
      </div>
    </div>
  );
};
