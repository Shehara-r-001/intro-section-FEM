import React from 'react';
import calender from '../../images/icon-calendar.svg';
import todo from '../../images/icon-todo.svg';
import planning from '../../images/icon-planning.svg';
import reminders from '../../images/icon-reminders.svg';
import './FeatureDrop.css';

const FeatureDrop = () => {
  return (
    <div>
      <div>
        <div className='feature__item'>
          <img className='feature__icon' src={todo} alt='' />
          <p>Todo List</p>
        </div>
        <div className='feature__item'>
          <img className='feature__icon' src={calender} alt='' />
          <p>Calendar</p>
        </div>
        <div className='feature__item'>
          <img className='feature__icon' src={reminders} alt='' />
          <p>Reminders</p>
        </div>
        <div className='feature__item'>
          <img className='feature__icon' src={planning} alt='' />
          <p>Planning</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureDrop;
