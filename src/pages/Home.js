import React from 'react';
import ImageSlide from '../components/ImageSlide';
import Images from '../constants/Images'

function Home() {
    return(
    <>
        <span>&nbsp;&nbsp;</span>
        <h2>Home</h2>
        <ImageSlide json={Images.home.generalSlide} name="generalSlide"/>
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
        <ImageSlide json={Images.home.automobileSlide} name="automobileSlide"/>
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
        <ImageSlide json={Images.home.commercialVehiclesSlide} name="commercialVehiclesSlide"/>
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
        <ImageSlide json={Images.home.electricVehiclesSlide} name="electricVehiclesSlide"/>
    </>
    );
}
  
export default Home;
