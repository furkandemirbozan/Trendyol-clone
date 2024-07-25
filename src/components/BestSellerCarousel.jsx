import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, CardMedia, Typography, Badge } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../css/BestSellerCarousel.css';  // CSS dosyasını import edin

const BestSellerCarousel = () => {
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
            image: 'https://cdn.dsmcdn.com/ty1435/product/media/images/prod/QC/20240723/00/2f560545-abcf-3001-a44f-734b535430ed/1_org_zoom.jpg',
            title: 'Ürün 1',
            price: '99,99 TL',
            rating: 4.7,
            reviews: 1500,
            badge: 'En Çok Satan 1. Ürün',
            coupon: 'Kupon Fırsatı',
            discount: '3 Al 2 Öde'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1383/product/media/images/prod/QC/20240626/12/28618c77-0f09-3f40-b706-4b1bd788afb4/1_org_zoom.jpg',
            title: 'Şampuan',
            price: '119,99 TL',
            rating: 4.5,
            reviews: 2400,
            badge: 'En Çok Satan 2. Ürün',
            coupon: 'Kupon Fırsatı'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1433/product/media/images/prod/QC/20240623/12/d4865585-634d-3428-870a-444e9c32cb82/1_org_zoom.jpg',
            title: 'HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml',
            price: '89,99 TL',
            rating: 4.6,
            reviews: 1800,
            badge: 'En Çok Satan 3. Ürün',
            coupon: '2. Ürün %30'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1376/product/media/images/prod/QC/20240622/00/bbddaf2b-a33e-3692-8ef2-21398afd4e0f/1_org_zoom.jpg',
            title: 'Karadut',
            price: '129,99 TL',
            rating: 4.8,
            reviews: 3200,
            badge: 'En Çok Satan 4. Ürün',
            coupon: 'Son 30 Günün En Düşük Fiyatı!'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1414/product/media/images/prod/QC/20240710/22/a889f9d5-27db-3130-af24-736aea637a3c/1_org_zoom.jpg',
            title: 'Temizlik Ürünü',
            price: '139,99 TL',
            rating: 4.4,
            reviews: 1100,
            badge: 'En Çok Satan 5. Ürün',
            coupon: '2. Ürün %30'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1439/product/media/images/prod/QC/20240724/00/3c5886dd-4c9c-3bfb-a46d-56bf1a858494/1_org_zoom.jpg',
            title: 'Zeytinyağı',
            price: '159,99 TL',
            rating: 4.9,
            reviews: 3500,
            badge: 'En Çok Satan 6. Ürün',
            coupon: '2. Ürün 1 TL'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1398/product/media/images/prod/QC/20240704/00/edd2d427-4d56-390f-a7ae-afcbabb34aa5/1_org_zoom.jpg',
            title: 'Ürün 7',
            price: '149,99 TL',
            rating: 4.3,
            reviews: 900,
            badge: 'En Çok Satan 7. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1421/product/media/images/prod/QC/20240714/15/78ca47dc-5d46-39cb-8d9f-9101a98cdc5d/1_org_zoom.jpg',
            title: 'Ürün 8',
            price: '169,99 TL',
            rating: 4.5,
            reviews: 2700,
            badge: 'En Çok Satan 8. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1273/product/media/images/prod/SPM/PIM/20240425/16/96b0ba0c-4694-3230-b8d8-5d9494abbc09/1_org_zoom.jpg',
            title: 'Ürün 9',
            price: '79,99 TL',
            rating: 4.1,
            reviews: 600,
            badge: 'En Çok Satan 9. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1435/product/media/images/prod/QC/20240722/14/a3764462-af16-3d61-9025-8fd3904df3a0/1_org_zoom.jpg',
            title: 'Ürün 10',
            price: '199,99 TL',
            rating: 4.7,
            reviews: 1400,
            badge: 'En Çok Satan 10. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1426/product/media/images/prod/PIM/20240718/08/f45ba0af-6357-4fff-8958-19e36ec9634c/1_org_zoom.jpg',
            title: 'Ürün 11',
            price: '89,99 TL',
            rating: 4.2,
            reviews: 1000,
            badge: 'En Çok Satan 11. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1439/product/media/images/prod/QC/20240723/22/de360028-3e06-3793-83b9-a9d24381faa8/1_org_zoom.jpg',
            title: 'Ürün 12',
            price: '129,99 TL',
            rating: 4.6,
            reviews: 1900,
            badge: 'En Çok Satan 12. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1432/product/media/images/prod/QC/20240720/11/c3c36d31-78f9-337d-82b6-60a1939f89b7/1_org_zoom.jpg',
            title: 'Ürün 13',
            price: '139,99 TL',
            rating: 4.8,
            reviews: 2600,
            badge: 'En Çok Satan 13. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1397/product/media/images/prod/QC/20240603/17/696ce6ac-5f21-3c11-a28f-8079d65534e8/1_org_zoom.jpg',
            title: 'Ürün 14',
            price: '159,99 TL',
            rating: 4.7,
            reviews: 3000,
            badge: 'En Çok Satan 14. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1339/product/media/images/prod/QC/20240529/16/92f6db58-9576-3a71-9020-4651c5bd45d4/1_org_zoom.jpg',
            title: 'Ürün 15',
            price: '179,99 TL',
            rating: 4.9,
            reviews: 3500,
            badge: 'En Çok Satan 15. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1383/product/media/images/prod/QC/20240626/12/cc8872b5-fe30-318d-867a-5161bc7750b4/1_org_zoom.jpg',
            title: 'Ürün 16',
            price: '149,99 TL',
            rating: 4.3,
            reviews: 1200,
            badge: 'En Çok Satan 16. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1424/product/media/images/prod/PIM/20240716/07/ef8dada4-c276-4d67-aad5-7bf6aca713e1/1_org_zoom.jpg',
            title: 'Ürün 17',
            price: '189,99 TL',
            rating: 4.6,
            reviews: 2400,
            badge: 'En Çok Satan 17. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1417/product/media/images/prod/QC/20240712/18/826b5e7b-5a2c-3c7b-9e9b-589680da8973/1_org_zoom.jpg',
            title: 'Ürün 18',
            price: '99,99 TL',
            rating: 4.1,
            reviews: 800,
            badge: 'En Çok Satan 18. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1264/product/media/images/prod/PIM/20240419/14/2987d108-ee95-46f4-ae05-d69d0cdf6aba/1_org_zoom.jpg',
            title: 'Ürün 19',
            price: '179,99 TL',
            rating: 4.8,
            reviews: 2800,
            badge: 'En Çok Satan 19. Ürün'
        },
        {
            image: 'https://cdn.dsmcdn.com/ty1431/product/media/images/prod/QC/20240721/16/7fc97deb-d8f7-3287-b7c9-ed130b8787d8/1_org_zoom.jpg',
            title: 'Ürün 20',
            price: '159,99 TL',
            rating: 4.7,
            reviews: 3200,
            badge: 'En Çok Satan 20. Ürün'
        },
    ];

    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
            <Typography variant="h4" component="div" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                Çok Satan Ürünler
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

export default BestSellerCarousel;
