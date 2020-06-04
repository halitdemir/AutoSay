import React from 'react';
import ImageSlide from '../components/ImageSlide';
import Images from '../constants/Images'

function Home() {
    return(
    <>
        <span>&nbsp;&nbsp;</span>
        <h2>Ana Sayfa</h2>
        <ImageSlide json={Images.home.generalSlide} name="generalSlide"/>
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
        <h5>&nbsp;&nbsp;Sistemimizi kullanmak için:</h5>
        <p>
            <ul>
                <li>Aşağıdaki albümlerden ilgili araç modelini seçin.</li>
                <li>Otomobil Konfigürasyon aracını kullanarak siparişinizi belirleyin.</li>
                <li>Hazırladığınız taslağı e-posta yolu ile bize bildirin.</li>
            </ul>
            &nbsp;Ardından yetkililerimizin sizinle iletişime geçmesini bekleyin.
            En kısa sürede size özel fiyat ve tekliflerle dönüş yapacağız.
        </p>
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
