import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, CardMedia, Typography, Badge } from '@mui/material';
import { FavoriteBorder as FavoriteIcon, } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CountdownTimer from '../custom/CountdownTimer.jsx';
import '../css/FlashProductsCarousel.css';  // CSS dosyasını import edin

const flashIconUrl = 'https://cdn.dsmcdn.com/web/production/flashIcon.svg'; // İkon URL'si

const FlashProductsCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const products = [
        {
            image: 'https://cdn.dsmcdn.com/ty1432/product/media/images/prod/QC/20240719/23/f54f0f32-f3e9-3d56-a3e1-f3d483951198/1_org_zoom.jpg',
            title: 'star shoes Siyah Lastikli Süet Kadın Sandalet',
            price: '189,90 TL',
            rating: 4.4,
            reviews: 3129,
            badge: 'Kupon Fırsatı',
            coupon: '10 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1320/product/media/images/prod/SPM/PIM/20240505/15/5895ad3a-d9f3-3db4-a32b-76540ba0e94c/1_org_zoom.jpg',
            title: 'Wildco Lacivert Fiyonklu Yazlık Crop Top, Lacivert Fiyonklu...',
            price: '287 TL',
            rating: 4.4,
            reviews: 66,
            badge: 'Kupon Fırsatı',
            coupon: '10 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1387/product/media/images/prod/QC/20240628/16/34a6a4af-e950-33ac-8619-e70423b96779/1_org_zoom.jpg',
            title: 'salezza Puset Kancası, Çanta Asma Asma Aparatı, Bebek...',
            price: '75 TL',
            rating: 4.1,
            reviews: 13,
            badge: 'Çok Al Az Öde'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1415/product/media/images/prod/QC/20240711/12/008eb28d-4f81-3d7e-9e61-07cedda6db91/1_org_zoom.jpg',
            title: 'Viejo Kilo Vermeye ve Ödem Atmaya Yardımcı Resveratrol...',
            price: '334 TL',
            rating: 4.1,
            reviews: 3302,
            badge: '3 Al 2 Öde'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1435/product/media/images/prod/QC/20240722/14/a3764462-af16-3d61-9025-8fd3904df3a0/1_org_zoom.jpg',
            title: 'Embeauty Kolajen Ve Keratin Saç Dökülmesine Karşı Hızlı Saç...',
            price: '329 TL',
            rating: 4.3,
            reviews: 5943,
            badge: '20 TL Kupon',
            coupon: '2. Ürün 1 TL'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1421/product/media/images/prod/QC/20240714/15/78ca47dc-5d46-39cb-8d9f-9101a98cdc5d/1_org_zoom.jpg',
            title: 'Embeauty Kolajen Ve Keratin Saç Dökülmesine Karşı Hızlı Saç...',
            price: '329 TL',
            rating: 4.3,
            reviews: 5943,
            badge: '20 TL Kupon',
            coupon: '2. Ürün 1 TL'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1225/product/media/images/prod/SPM/PIM/20240324/13/a3b0212e-cfc5-314d-9fbb-fc7dad0a8702/1_org_zoom.jpg',
            title: 'Embeauty Kolajen Ve Keratin Saç Dökülmesine Karşı Hızlı Saç...',
            price: '329 TL',
            rating: 4.3,
            reviews: 5943,
            badge: '20 TL Kupon',
            coupon: '2. Ürün 1 TL'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1376/product/media/images/prod/QC/20240623/11/7594dc7c-3d55-369d-8215-bfbb21f844ab/1_org_zoom.jpg',
            title: 'Embeauty Kolajen Ve Keratin Saç Dökülmesine Karşı Hızlı Saç...',
            price: '329 TL',
            rating: 4.3,
            reviews: 5943,
            badge: '20 TL Kupon',
            coupon: '2. Ürün 1 TL'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1438/product/media/images/prod/QC/20240723/21/51d03417-2a5a-3450-97ce-8d9c7d322962/1_org_zoom.jpg',
            title: 'Embeauty Kolajen Ve Keratin Saç Dökülmesine Karşı Hızlı Saç...',
            price: '329 TL',
            rating: 4.3,
            reviews: 5943,
            badge: '20 TL Kupon',
            coupon: '2. Ürün 1 TL'
        },

    ];

    const hoursMinSecs = { hours: 2, minutes: 0, seconds: 0 };

    return (
        <div className="flash-products-carousel">
            <div className="flash-header">
                <img src={flashIconUrl} alt="Flash Icon" className="flash-icon" />
                <Typography variant="h4" component="div" gutterBottom>
                    Flaş Ürünler
                </Typography>
                <CountdownTimer hoursMinSecs={hoursMinSecs} />
            </div>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <Card key={index} className="product-card">
                        <CardMedia
                            component="img"
                            height="200"
                            image={product.image}
                            alt={product.title}
                        />
                        <CardContent className="product-content">
                            <Typography variant="h6" component="div" noWrap>
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong style={{ color: '#F27A1A' }}>{product.price}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.rating} ({product.reviews} oy)
                            </Typography>
                            {product.badge && (
                                <Typography variant="body2" color="primary">
                                    {product.badge}
                                </Typography>
                            )}
                            {product.coupon && (
                                <Typography variant="body2" color="secondary" className="coupon">
                                    <span className="coupon-icon">%</span> {product.coupon}
                                </Typography>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <FavoriteIcon style={{ color: 'gray' }} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} arrow-icon next-arrow`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <KeyboardArrowRightIcon style={{ color: 'black' }} />
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} arrow-icon prev-arrow`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <KeyboardArrowLeftIcon style={{ color: 'black' }} />
        </div>
    );
};

export default FlashProductsCarousel;
