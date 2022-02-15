import React from 'react';

const Contact = () => {
  return (
      <div className='container contactContainer'>
        <h4>If you want someone who is always curious, love challanges and
            <b>  thinks outside of the box</b>, feel free to contact me 
        </h4>
        <div className='container'>
          <div className='row gx-5 justify-content-center align-items-center'>
            <div className='col-1 d-flex justify-content-center align-items-center'>
            <a href='https://github.com/Zana994' target={'_blank'} aria-label='Github profile' rel="noreferrer">
              <div className='option-1'>
                <span></span>
              </div>
            </a>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
            <a href='https://www.linkedin.com/in/zanamemic/' target={'_blank'} aria-label='Linkedin profile' rel="noreferrer">
              <div className='option-2'>
                <span></span>
              </div>
            </a>
            </div>
            <div className='col-1 d-flex justify-content-center align-items-center'>
              <a href='mailto:zana_memic@hotmail.com'>
                <div className='option-3'>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
