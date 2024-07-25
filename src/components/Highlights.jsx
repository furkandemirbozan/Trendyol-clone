import React from 'react';
import { Container, Grid, Button } from '@mui/material';

const Highlights = () => {
    return (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Button
                        fullWidth
                        style={{
                            backgroundColor: '#EFFBF5', // Sepete En Çok Eklenenler arka plan rengi
                            color: '#008A45', // Sepete En Çok Eklenenler metin rengi
                            borderRadius: '8px',
                            height: '60px',
                            fontSize: '16px',
                            fontWeight: '900', // Font kalınlığı
                            lineHeight: 'normal', // Satır yüksekliği
                            padding: '12px 24px', // İç boşluk
                            textTransform: 'none' // Metin dönüşümünü kapat
                        }}
                    >
                        Sepete En Çok Eklenenler
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button
                        fullWidth
                        style={{
                            backgroundColor: '#FEF4EC', // En Çok Öne Çıkanlar arka plan rengi
                            color: '#B04504', // En Çok Öne Çıkanlar metin rengi
                            borderRadius: '8px',
                            height: '60px',
                            fontSize: '16px',
                            fontWeight: '900', // Font kalınlığı
                            lineHeight: 'normal', // Satır yüksekliği
                            padding: '12px 24px', // İç boşluk
                            textTransform: 'none' // Metin dönüşümünü kapat
                        }}
                    >
                        En Çok Öne Çıkanlar
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button
                        fullWidth
                        style={{
                            backgroundColor: '#FEF0F2', // Flaş Ürünler arka plan rengi
                            color: '#C2033D', // Flaş Ürünler metin rengi
                            borderRadius: '8px',
                            height: '60px',
                            fontSize: '16px',
                            fontWeight: '900', // Font kalınlığı
                            lineHeight: 'normal', // Satır yüksekliği
                            padding: '12px 24px', // İç boşluk
                            textTransform: 'none' // Metin dönüşümünü kapat
                        }}
                    >
                        Flaş Ürünler
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Highlights;
