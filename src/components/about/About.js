import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className = 'about-desc'>
                <h3>Experincia en:</h3>
               <ul>
                   <li>Maquetaciòn</li>
                   <li>Soluciòn de errores en còdigo</li>
                   <li>Diseño</li>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>JavaScript</li>
                   <li>ReactJS</li>
                   <li>Angular</li>
                   <li>Php</li>
               </ul> 
                       
            </div>

            <div className='about-img'>
                <img src='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg' alt=''/>
            </div>
            
        </div>
    )
}

export default About
