import React from 'react';
import './footer.css';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                 <h1>Bienvenido</h1>
                 <p>Bogota Colombia</p>
            </div>
            <div className='footer-contact'>
            <h3>Contàctame</h3>
            <p>trianafernando7@gmail.com</p>
            <p>3133027536</p>
            <p>Y pongámonos a trabajar</p>
            </div>

            <div className='footer-sns'>
                <div className='design-by'>
                Diseñado por : Fernando Triana
                </div>

                <div className='sns-links'>
                    <a href='https://linkedin.com' target='_blank' rel='noreferrer'> 
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>

                    <a href='https://twitter.com' target='_blank' rel='noreferrer'> 
                        <i className='fab fa-twitter twitter'></i>
                    </a>

                    <a href='https://facebook.com' target='_blank'rel='noreferrer'> 
                        <i className='fab fa-facebook facebook'></i>
                    </a>

                    

                </div>

            </div>
            
        </footer>
    )
}

export default Footer
