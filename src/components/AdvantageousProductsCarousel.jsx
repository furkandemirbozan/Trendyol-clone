import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, CardMedia, Typography, Badge } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../css/AdvantageousProductsCarousel.css';

const AdvantageousProductsCarousel = () => {
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
            image: 'https://cdn.dsmcdn.com/ty1413/product/media/images/prod/QC/20240711/17/0544be3d-f66c-3523-943b-1fbe0d5fbbcb/1_org_zoom.jpg',
            title: 'Ürün 1',
            price: '119,99 TL',
            rating: 4.5,
            reviews: 2400,
            badge: 'Avantajlı Ürün 1.',
            coupon: 'Kupon Fırsatı'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1412/product/media/images/prod/QC/20240709/12/8697bf7d-d58a-345e-937c-0da1a29602c0/1_org_zoom.jpg',
            title: 'Ürün 2',
            price: '129,99 TL',
            rating: 4.8,
            reviews: 3200,
            badge: 'Avantajlı Ürün 2.',
            coupon: 'Son 30 Günün En Düşük Fiyatı!'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1376/product/media/images/prod/QC/20240621/21/b360ce77-9955-3dae-8815-6e9aab0d683e/1_org_zoom.jpg',
            title: 'Ürün 3',
            price: '159,99 TL',
            rating: 4.9,
            reviews: 3500,
            badge: 'Avantajlı Ürün 3.',
            coupon: '2. Ürün 1 TL'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1376/product/media/images/prod/QC/20240621/21/b360ce77-9955-3dae-8815-6e9aab0d683e/1_org_zoom.jpg',
            title: 'Ürün 4',
            price: '99,99 TL',
            rating: 4.7,
            reviews: 1500,
            badge: 'Avantajlı Ürün 4.',
            coupon: 'Kupon Fırsatı'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1389/product/media/images/prod/PIM/20240629/06/6bd42f3a-179f-4749-ab6c-3af418d23880/1_org_zoom.jpg',
            title: 'Ürün 5',
            price: '149,99 TL',
            rating: 4.3,
            reviews: 900,
            badge: 'Avantajlı Ürün 5.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1057/product/media/images/prod/SPM/PIM/20231121/16/4ad9502e-4d59-39cd-aab2-b4bd18a64398/1_org_zoom.jpg',
            title: 'Ürün 6',
            price: '169,99 TL',
            rating: 4.5,
            reviews: 2700,
            badge: 'Avantajlı Ürün 6.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1182/product/media/images/prod/SPM/PIM/20240227/11/b2fde1cd-221a-3115-bb56-7f45396fce55/1_org_zoom.jpg',
            title: 'Ürün 7',
            price: '79,99 TL',
            rating: 4.1,
            reviews: 600,
            badge: 'Avantajlı Ürün 7.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1429/product/media/images/prod/QC/20240719/02/59b62887-3521-3947-8706-1c9865d88409/1_org_zoom.jpg',
            title: 'Ürün 8',
            price: '199,99 TL',
            rating: 4.7,
            reviews: 1400,
            badge: 'Avantajlı Ürün 8.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1415/product/media/images/prod/QC/20240709/13/7de3789c-5cdf-3e84-9e04-1f8c46c7205e/1_org_zoom.jpg',
            title: 'Ürün 9',
            price: '89,99 TL',
            rating: 4.2,
            reviews: 1000,
            badge: 'Avantajlı Ürün 9.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1389/product/media/images/prod/QC/20240630/00/679d55ef-fd66-3f99-99b7-42fb36a5d368/1_org_zoom.jpg',
            title: 'Ürün 10',
            price: '129,99 TL',
            rating: 4.6,
            reviews: 1900,
            badge: 'Avantajlı Ürün 10.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1348/product/media/images/prod/QC/20240604/20/2e6b36bc-0e16-37ed-89b4-a4e50a6d57b6/1_org_zoom.jpg',
            title: 'Ürün 11',
            price: '139,99 TL',
            rating: 4.8,
            reviews: 2600,
            badge: 'Avantajlı Ürün 11.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1244/product/media/images/prod/PIM/20240405/12/bd02d6f7-d382-4124-991d-505201177f28/1_org_zoom.jpg',
            title: 'Ürün 12',
            price: '159,99 TL',
            rating: 4.7,
            reviews: 3000,
            badge: 'Avantajlı Ürün 12.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1432/product/media/images/prod/QC/20240720/21/db1338df-0b3d-33b0-b9e5-9340977521e8/1_org_zoom.jpg',
            title: 'Ürün 13',
            price: '179,99 TL',
            rating: 4.9,
            reviews: 3500,
            badge: 'Avantajlı Ürün 13.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1390/product/media/images/prod/QC/20240630/00/fffe8c21-6372-3efb-ae1c-7057fb9d9da9/1_org_zoom.jpg',
            title: 'Ürün 14',
            price: '149,99 TL',
            rating: 4.3,
            reviews: 1200,
            badge: 'Avantajlı Ürün 14.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1337/product/media/images/prod/QC/20240528/13/308bbee9-3103-3689-a760-88d120c3b20b/1_org_zoom.jpg',
            title: 'Ürün 15',
            price: '189,99 TL',
            rating: 4.6,
            reviews: 2400,
            badge: 'Avantajlı Ürün 15.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1438/product/media/images/prod/QC/20240723/16/b27acace-e2af-3a3c-ba76-802f0c89d209/1_org_zoom.jpg',
            title: 'Ürün 16',
            price: '99,99 TL',
            rating: 4.1,
            reviews: 800,
            badge: 'Avantajlı Ürün 16.'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1377/product/media/images/prod/QC/20240624/10/1ca6249d-ecc7-3756-873f-3165e6d5ac1e/1_org_zoom.jpg',
            title: 'Ürün 17',
            price: '179,99 TL',
            rating: 4.8,
            reviews: 2800,
            badge: 'Avantajlı Ürün 17.'
        }
    ];

    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
            <Typography variant="h4" component="div" style={{ marginBottom: '20px' }}>
                Avantajlı Ürünler
            </Typography>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <Card key={index} className="product-card">
                        <div className="advantage-badge">
                            <img src="https://cdn.dsmcdn.com/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" alt="Avantajlı Ürün" />
                        </div>
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

export default AdvantageousProductsCarousel;
