import React from 'react';
import { Image } from 'react-bootstrap';

function About() {
    return (
    <div className="mainDiv">
        <span>&nbsp;&nbsp;</span>
        <Image 
                className="d-block w-100"
                src={require("../assets/images/about_us (4).jpg")}
                alt={"about_us(2)"}
                thumbnail
        />
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
        <h5>Biz Kimiz :</h5>
        <p>&nbsp;&nbsp;Otomativ sektöründeki üretim ve üretime bağlı diğer yan sektörlerdeki sistemleri optimize etmek
amacıyla bir araya gelen mühendisleriz.Küresel piyasada büyük bir pazar payına sahip olan 
otomativ sektöründeki optimizasyonların geliştirilmesi ile fazla üretimin önüne geçerek 
fazla kaynak tüketiminin önüne geçip çevreci bir yaklaşım kazandırmayı hedeflemekle  birlikte 
fazla üretim sonucu ortaya çıkan maliyet problemlerine de çözüm getirmeyi hedeflemekteyiz.
           .</p>
        <h5>Misyonumuz :</h5>
        <p>&nbsp;&nbsp;Topluma fayda sağlayan yenilikçi ve çevreci otomotiv ürün ve hizmetleri sunmak temel misyonumuz olmakla birlikte 
küresel ve ekonomik piyasalardaki otomobil üretimini en ideal şekle getirmeyi hedeflemekteyiz.
        </p>
        <h5>Vizyonumuz :</h5>
        <p>&nbsp;&nbsp;Dünyanın en akıllı otomasyon sistemi ve stratejileriyle tükenen kaynaklarımızı koruma fikri vizyonumuzun temelini oluşturur.
gelişen teknoloji ile birlikte çağın gereksinimlerine yönelik ihtiyaçları karşılayacak şekilde her sistemin çalışmasını hedeflemekteyiz.
bu hedefler kapsamında otomasyon sistemlerini global piyasanın en büyük payına sahip olan otomativ sektörü ile gerçekleştirmeyi planlamaktayız.
        </p>

    </div>
    );
}
  
export default About;
