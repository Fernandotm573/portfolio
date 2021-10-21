import React, {useState, useEffect} from 'react';
import './App.css'
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Carousel from './components/Carousel';
import Info from './components/info/Info';
import Footer from './components/footer/Footer'



function App() {

  const [scrollHeigth, setScrollHeigth] = useState(0);

  //funcion que controla el scroll
 const handleScroll = () => {
    const position = window.scrollY;
    setScrollHeigth(position);  
 }

 // cada vez q se haga scroll se actuliza con (useEffect)
 useEffect (() => {
   window.addEventListener('scroll', handleScroll)
 }, [scrollHeigth]);

 const images= [

  {
    id: 1,
    title: 'Proyecto  ',
    image: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',

  },
  {
    id: 2,
    title: 'Proyecto',
    image:'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
  },
  {
    id: 3,
    title: 'Proyecto',
    image: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
  }
]

  return (
    <div className="App">
      
    
      <Navbar 
          isScrolling={scrollHeigth}/>

      <Cover />   

      <About />  

      <Carousel 
          images={images}
        
          />

      <Info />

      <Footer />

     

    </div>
  );
}

export default App;
