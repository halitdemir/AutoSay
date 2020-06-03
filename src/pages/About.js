import React from 'react';
import ImageSlide from '../components/ImageSlide';
import Images from '../constants/Images'

function About() {
    return (
    <div className="mainDiv">
        <span>&nbsp;&nbsp;</span>
        <h2>About</h2>
        <p>Bişeler Bişeler</p>
        <ImageSlide json={Images.about.generalSlide} name="generalSlide"/>
        <h5>Biz Kimiz :</h5>
        <p>otomativ sektöründeki üretim ve üretime bağlı diğer yan sektörlerdeki sistemleri optimize etmek
amacıyla bir araya gelen mühendisleriz.Küresel piyasada büyük bir pazar payına sahip olan 
otomativ sektöründeki optimizasyonların geliştirilmesi ile fazla üretimin önüne geçerek 
fazla kaynak tüketiminin önüne geçip çevreci bir yaklaşım kazandırmayı hedeflemekle  birlikte 
fazla üretim sonucu ortaya çıkan maliyet problemlerine de çözüm getirmeyi hedeflemekteyiz.
           .</p>
        <h5>Misyonumuz :</h5>
        <p>Topluma fayda sağlayan yenilikçi ve çevreci otomotiv ürün ve hizmetleri sunmak temel misyonumuz olmakla birlikte 
küresel ve ekonomik piyasalardaki otomobil üretimini en ideal şekle getirmeyi hedeflemekteyiz.
        </p>
        <h5>Vizyonumuz :</h5>
        <p>Dünyanın en akıllı otomasyon sistemi ve stratejileriyle tükenen kaynaklarımızı koruma fikri vizyonumuzun temelini oluşturur.
gelişen teknoloji ile birlikte çağın gereksinimlerine yönelik ihtiyaçları karşılayacak şekilde her sistemin çalışmasını hedeflemekteyiz.
bu hedefler kapsamında otomasyon sistemlerini global piyasanın en büyük payına sahip olan otomativ sektörü ile gerçekleştirmeyi planlamaktayız.
        </p>

    </div>
    );
}
  
export default About;
