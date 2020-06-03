import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const hStyle = { 
  color: 'white',   
  textShadowColor: 'rgba(255, 0, 123, 0.75)',
  textShadowOffset: {width: 2, height: 3},
  textShadowRadius: 10
};
function ImageSlide(props){
  return(
    <Carousel>
      {Object.keys(props.json).map(key => 
        {
          if(props.name==='generalSlide'){
            return(
              <Carousel.Item>
                <Image 
                  className="d-block w-100"
                  src={props.json[key].src}
                  alt={props.json[key].alt}
                  thumbnail
                />
                <Carousel.Caption>
                  <h3 style={ hStyle }>{props.json[key].firstText}</h3>
                  <p style={ hStyle }>{props.json[key].secondText}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          }else{
            return( 
              <Carousel.Item>
                <NavLink to="/order_generator">
                  <Image 
                    className="d-block w-100"
                    src={props.json[key].src}
                    alt={props.json[key].alt}
                    thumbnail
                  />
                </NavLink>
                <Carousel.Caption>
                  <h3 style={ hStyle }>{props.json[key].firstText}</h3>
                  <p style={ hStyle }>{props.json[key].secondText}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          }
        }
        )}
    </Carousel>
  );
}


export default ImageSlide;