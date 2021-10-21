import React from 'react';
import Slider from 'infinite-react-carousel';
import './carousel.css';

const Carousel = ({images}) => {

    

    return (
       <section className='slider'>
           <h1 className='slider-title'>
                 Proyectos</h1>

                <Slider className='slider-content'>
                    {
                        images.map(image => <div key={image.id}
                             className='slider-content-item'>
                            <img src={image.image} alt={image.title}/>
                            <p className='slider-description'>{image.title}</p>
                        </div>)
                    }
        

                </Slider>
           

       </section>
    )
}

export default Carousel;
