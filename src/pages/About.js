import React from 'react';
import profilePhoto from '../photos/profile.jpeg'

const About = () => {
  return (
  <div className='container aboutContainer'>
    <div className='row justify-content-center align-items-center'>
      <div className='col d-flex justify-content-center align-items-center'>
        <div className='imageContainer'>
        <img src={profilePhoto} alt='Profile' />
        </div>
      </div>
      <div className='col aboutText'>
        <p>Hello, I am Zana</p>
        <p>a girl who had a dream of becoming a developer, woke up and said why not?!
            Dare to reach for what you want in life.</p>
      </div>
    </div>
  </div>
  );
};

export default About;
