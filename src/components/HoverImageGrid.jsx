import React from 'react';
import { Grid } from '@mui/material';
import '../css/HoverImageGrid.css';

const images = [
    'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723230257_FenomenlerinSecimleri3013070mobile.jpg',
    'https://cdn.dsmcdn.com/ty1437/pimWidgetApi/mobile_20240723230359_Avon3013108mobile.jpg',
    'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723230428_350TLaltiurunler3013071mobile.jpg',
    'https://cdn.dsmcdn.com/ty1437/pimWidgetApi/mobile_20240723230258_KuponluUrunler3013073mobile.jpg',
    'https://cdn.dsmcdn.com/ty1439/pimWidgetApi/mobile_20240723230359_ArmaniBeautyPradaMugler3013113mobile.jpg',
    'https://cdn.dsmcdn.com/ty1439/pimWidgetApi/mobile_20240723230312_Versace3013115mobile.jpg',
    'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723230349_Bioderma3013382mobile.jpg',
    'https://cdn.dsmcdn.com/ty1439/pimWidgetApi/mobile_20240723230316_KisiselBakimAvantajliUrunlerKozmetikGunleri3014824mobile.jpg',
    'https://cdn.dsmcdn.com/ty1437/pimWidgetApi/mobile_20240723230334_ThePurestSolutions3014897mobile.jpg',
    'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723230340_LOreal3006699mobile.jpg',
    'https://cdn.dsmcdn.com/ty1439/pimWidgetApi/mobile_20240723230310_Bargello3013110mobile.jpg',
    'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723230333_Avene3013383mobile.jpg',
    'https://cdn.dsmcdn.com/ty1435/pimWidgetApi/mobile_20240723060450_MadParfum3013143mobile.jpg',
    'https://cdn.dsmcdn.com/ty1439/pimWidgetApi/mobile_20240723230342_KisiselBakimKozmetikGunleriYazTrendleri3014923mobile.jpg',
    'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723230309_Sebamed3013387mobile.jpg'
];

const ImageGrid = () => {
    return (
        <Grid container spacing={2}>
            {images.map((image, index) => (
                <Grid item xs={12} sm={4} key={index}>
                    <div className="image-container">
                        <img src={image} alt={`image-${index}`} className="image-grid-img" />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default ImageGrid;
