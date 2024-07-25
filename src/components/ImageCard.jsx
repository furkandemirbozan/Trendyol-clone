import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import '../css/ImageCard.css';  // CSS dosyasını import edin

const images = [
    'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723200342_KozmetikteFlasUrunler3013075mobile.jpg',
    'https://cdn.dsmcdn.com/ty1437/pimWidgetApi/mobile_20240723230417_YvesSaintLaurentBeauty3013112mobile.jpg',
    'https://cdn.dsmcdn.com/ty1437/pimWidgetApi/mobile_20240723230327_VictoriasSecret3013124mobile.jpg'
];

const ImageCard = () => {
    return (
        <Grid container spacing={3}>
            {images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className="image-card">
                        <CardMedia
                            component="img"
                            image={image}
                            alt="carousel"
                            className="image"
                        />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ImageCard;
