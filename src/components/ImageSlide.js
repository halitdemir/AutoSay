import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const hStyle = { 
  color: '#fff',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 1,
  textShadowColor: '#000',
};

const bStyle = {
  flex: 1,
  backgroundColor: 'rgba(128,127,128, 0.7)',
  borderRadius: 5 + 'px'
}
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
                  <div style={bStyle}>
                    <h3 style={ hStyle }>{props.json[key].firstText}</h3>
                    <p style={ hStyle }>{props.json[key].secondText}</p>
                  </div>
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
                  <div style={bStyle}>
                    <h3 style={ hStyle }>{props.json[key].firstText}</h3>
                    <p style={ hStyle }>{props.json[key].secondText}</p>
                  </div>
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