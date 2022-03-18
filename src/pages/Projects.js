import React from 'react';
import weatherProject from '../photos/weather.png'
import ipTracker from '../photos/ip_tracker.png'
import toDoApp from '../photos/to_do_app.png'
import countdownTimer from '../photos/countdown_timer.png'
import roomHomepage from '../photos/room_homepage.png'
import movieApp from '../photos/movie_app.png'

const Projects = () => {
  return (
  <div className='container projectsContainer'>
    <div className='row gy-5 justify-content-center align-items-center'>

    <div className='col d-flex justify-content-center align-items-center'>
      <a href='https://movie-app-zana994.vercel.app' target={'_blank'} aria-label='Movie App' rel="noreferrer">
        <div className='projectWrapper'>
          <div className='project_photo_container'>
            <img src={movieApp} target={'_blank'} alt='Movie App' />
          </div>
          <div className='descriptionContainer'>
            <p>HTML SCSS REACT JS API</p>
            <p>DESKTOP VERSION MOVIE APP</p>
          </div>
        </div>
        </a>
      </div>

      <div className='col d-flex justify-content-center align-items-center'>
        <a href='https://weather-app-zana994.vercel.app' target={'_blank'} aria-label='Weather App' rel="noreferrer"> 
        <div className='projectWrapper'>
          <div className='project_photo_container'>
            <img src={weatherProject} target={'_blank'} alt='Weather App' />
          </div>
          <div className='descriptionContainer'>
            <p>HTML SCSS REACT JS API</p>
            <p>MOBILE FIRST WEATHER APP</p>
          </div>
        </div>
        </a>
      </div>

      <div className='col d-flex justify-content-center align-items-center'>
      <a href='https://ip-tracker-react-git-master-zana994.vercel.app/' target={'_blank'} aria-label='Ip Address Tracker' rel="noreferrer">
        <div className='projectWrapper'>
          <div className='project_photo_container'>
            <img src={ipTracker} target={'_blank'} alt='Ip Address Tracker' />
          </div>
          <div className='descriptionContainer'>
            <p>HTML SCSS REACT JS API</p>
            <p>IP ADDRESS TRACKER</p>
          </div>
        </div>
        </a>
      </div>

      <div className='col d-flex justify-content-center align-items-center'>
      <a href='https://todo-app-zana994.vercel.app/' target={'_blank'} aria-label='To Do App' rel="noreferrer">
        <div className='projectWrapper'>
          <div className='project_photo_container'>
            <img src={toDoApp} target={'_blank'} alt='To Do App' />
          </div>
          <div className='descriptionContainer'>
            <p>HTML SCSS VANILLA JS</p>
            <p>TO DO APP</p>
          </div>
        </div>
        </a>
      </div>

      <div className='col d-flex justify-content-center align-items-center'>
      <a href='https://countdown-timer-zana994.vercel.app/' target={'_blank'} aria-label='Countdown Timer' rel="noreferrer">
        <div className='projectWrapper'>
          <div className='project_photo_container'>
            <img src={countdownTimer} target={'_blank'} alt='Countdown Timer' />
          </div>
          <div className='descriptionContainer'>
            <p>HTML SCSS VANILLA JS</p>
            <p>COUNTDOWN TIMER</p>
          </div>
        </div>
        </a>
      </div>

      <div className='col d-flex justify-content-center align-items-center'>
      <a href='https://room-homepage-zana994.vercel.app/' target={'_blank'} aria-label='Room Homepage' rel="noreferrer">
        <div className='projectWrapper'>
          <div className='project_photo_container'>
            <img src={roomHomepage} target={'_blank'} alt='Room Homepage' />
          </div>
          <div className='descriptionContainer'>
            <p>HTML SCSS VANILLA JS</p>
            <p>ROOM HOMEPAGE</p>
          </div>
        </div>
        </a>
      </div>

    </div>
  </div>
  );
};

export default Projects;
