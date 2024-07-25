import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../css/ProductCarousel.css';  // CSS dosyasını import edin

const ProductCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px', // Kenarlarda boşluk olmaması için
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    const products = [
        {
            image: 'https://cdn.dsmcdn.com/ty1433/product/media/images/prod/QC/20240623/12/d4865585-634d-3428-870a-444e9c32cb82/1_org_zoom.jpg',
            title: 'HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml',
            price: '200 TL',
            rating: 4.8,
            reviews: 44813,
            badge: 'En Çok Satan 1. Ürün',
            coupon: '10 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1431/product/media/images/prod/QC/20240720/22/38618ea1-1a9a-3a3f-9b87-3da2960c977b/1_org_zoom.jpg',
            title: 'Bioxcin Keratin Argan Besleyici Onarıcı Saç Bakım Yağı 150 ml',
            price: '239,99 TL',
            rating: 4.7,
            reviews: 5257,
            badge: 'En Çok Ziyaret Edilen 3. Ürün',
            coupon: '20 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1195/product/media/images/prod/PIM/20240305/09/98514b48-e654-4960-b050-917d5951d557/1_org_zoom.jpg',
            title: 'The Ceel Biberiye Yağı Complexi Saç Dökülmesi ve Yıpranmış Saçlar İçin',
            price: '253 TL',
            rating: 4.5,
            reviews: 2484,
            badge: 'En Çok Ziyaret Edilen 2. Ürün',
            coupon: '15 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1439/product/media/images/prod/QC/20240529/11/b255b9e1-dc88-3f3e-9c93-36907619194d/1_org_zoom.jpg',
            title: 'HELIS BUTIK Pembe Çiçekli Kare Yaka Elbise',
            price: '1.016,25 TL',
            rating: 2,
            reviews: 1,
            coupon: '5 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1168/product/media/images/prod/SPM/PIM/20240212/14/345d9788-7203-394c-bfdd-e1c8cbf029a9/1_org_zoom.jpg',
            title: 'Bershka Elastik belli straight fit keten karışımlı pantolon',
            price: '890 TL',
            rating: 4.3,
            reviews: 283,
            coupon: '25 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1388/product/media/images/prod/QC/20240626/22/55a704a8-84c0-3865-814f-b0825fb2486e/1_org_zoom.jpg',
            title: 'Ürün 6',
            price: 'Fiyat 6',
            rating: 4.0,
            reviews: 200,
            coupon: '10 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1432/product/media/images/prod/QC/20240720/20/1ac60f0a-3212-3f3e-85eb-116ef4e654e8/1_org_zoom.jpg',
            title: 'Ürün 7',
            price: 'Fiyat 7',
            rating: 4.2,
            reviews: 150,
            coupon: '20 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1402/product/media/images/prod/QC/20240705/20/673e63d0-511e-3970-b60b-8b4d960b778b/1_org_zoom.jpg',
            title: 'Ürün 8',
            price: 'Fiyat 8',
            rating: 4.1,
            reviews: 180,
            coupon: '15 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1193/product/media/images/prod/PIM/20240302/10/904ece85-452c-472a-b5c5-7fa4f43f8c58/1_org_zoom.jpg',
            title: 'Ürün 9',
            price: 'Fiyat 9',
            rating: 4.0,
            reviews: 190,
            coupon: '5 TL Kupon'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1339/product/media/images/prod/QC/20240530/00/2e3d0288-1772-3ad2-baf3-196c5f6fa4cf/1_org_zoom.jpg',
            title: 'Ürün 10',
            price: 'Fiyat 10',
            rating: 4.3,
            reviews: 220,
            coupon: '25 TL Kupon'
        },
    ];

    return (
        <div className="carousel-container">
            <Typography variant="h4" component="div" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                Popüler Ürünler
            </Typography>
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
                            <Typography variant="h6" component="div" className="product-title" noWrap>
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="product-rating">
                                {product.rating} ({product.reviews} oy)
                            </Typography>
                            <Typography variant="h6" component="div" className="product-price">
                                {product.price}
                            </Typography>
                            {product.badge && (
                                <Typography variant="body2" color="primary" className="product-badge">
                                    {product.badge}
                                </Typography>
                            )}
                            <div className="product-coupons">
                                {product.coupon && (
                                    <Typography variant="body2" component="div" className="coupon">
                                        <span className="coupon-icon">%</span>
                                        {product.coupon}
                                    </Typography>
                                )}
                                {product.discount && (
                                    <Typography variant="body2" component="div" className="coupon">
                                        {product.discount}
                                    </Typography>
                                )}
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

export default ProductCarousel;
