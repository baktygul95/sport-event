import {SPORT_CATEGORIES, EVENT_STRATEGY} from '../../__mock/categories';
import HomeSlider from "../../components/home-slider";
import * as React from 'react';
import './index.scss';

const HomeScene = (props) => {
  return (
    <div className='home-page'>
      <HomeSlider/>
      <h1 className='title'>NEWS AND EVENTS</h1>
      {SPORT_CATEGORIES.map(item => (
        <div className='category-main' key={item.id}>
          <h3 className='category-name'>{item.name}</h3>
          <div className='category-wrapper'>
            {EVENT_STRATEGY(item.id).map(category => (
              <div key={category.id} className='category-block'>
                <img src={category.img} alt=""/>
                <span className='category-description'>{category.description}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScene