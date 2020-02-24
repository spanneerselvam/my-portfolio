import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Slide from '../components/Slide'
import ReactDOM from 'react-dom'
import Slider from '../components/Slider'
import images from '../images'

function TravelPage(props){
return(

  <div>

    <Hero title={props.title} subTitle='"Not all who wander are lost."'/>
      <Content />
    <Slider slides={images}/>
  </div>

);
ReactDOM.render(<Slider slides={images} />, document.querySelector('.main'))

}
export default TravelPage;
