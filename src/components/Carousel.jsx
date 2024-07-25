import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10, // Aynı anda gösterilecek sayısı
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,//kayma hızı
        nextArrow: <ArrowForwardIos style={{ color: '#aaa', fontSize: '30px' }} />,
        prevArrow: <ArrowBackIos style={{ color: '#aaa', fontSize: '30px' }} />
    };

    const items = [
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Vestel_202301280121.jpg', alt: 'Vestel', text: 'Vestel' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Kumtel_202301270326.png', alt: 'Kumtel', text: 'Kumtel' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/4/26/Stradivarius_202304260936.png', alt: 'Stradivarius', text: 'Stradivarius' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Defacto_202301270049.jpg', alt: 'Defacto', text: 'Defacto' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png', alt: 'Adidas', text: 'Adidas' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/ArcElik_202301262144.png', alt: 'Arçelik', text: 'Arçelik' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Baymak_202301262207.png', alt: 'Baymak', text: 'Baymak' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/En_Cok_Satanlar_202302142041.png', alt: 'En Çok Satanlar', text: 'En Çok Satanlar' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/10/27/Gazze_Web_Circlebanner_202310271210.png', alt: 'Gazze', text: 'Gazze' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2024/2/21/Deskte_V12_202402210905.png', alt: 'Deskte', text: 'Deskte' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/7/20/Widget_202307201111.png', alt: 'Widget', text: 'Widget' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/7/26/Widget_202307261451.png', alt: 'Widget', text: 'Widget' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/8/22/Kredilercircle_202308221603.png', alt: 'Krediler', text: 'Krediler' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg', alt: 'Apple', text: 'Apple' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg', alt: 'Philips', text: 'Philips' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg', alt: 'Topstory', text: 'Topstory' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Samsung_202301271715.jpg', alt: 'Samsung', text: 'Samsung' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg', alt: 'Xiaomi', text: 'Xiaomi' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg', alt: 'Karaca', text: 'Karaca' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Bosch_202301262207.png', alt: 'Bosch', text: 'Bosch' },
        { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png', alt: 'Senin İçin Seçtik', text: 'Senin İçin Seçtik' }
    ];

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={item.src} alt={item.alt} className="rounded-full" style={{ width: '80px', height: '80px' }} />
                        <span className="mt-2">{item.text}</span>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default Carousel;
