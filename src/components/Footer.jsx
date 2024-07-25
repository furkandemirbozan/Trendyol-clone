import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import '../css/Footer.css';  // CSS dosyasını import ediyoruz

const Footer = () => {
    return (
        <Box className="footer-container">
            <Box className="footer-content">
                <Box className="footer-column">
                    <Typography variant="h6" className="footer-title">Trendyol</Typography>
                    <Link href="#" className="footer-link">Biz Kimiz</Link>
                    <Link href="#" className="footer-link">Kariyer</Link>
                    <Link href="#" className="footer-link">İletişim</Link>
                    <Link href="#" className="footer-link">Trendyol'da Satış Yap</Link>
                    <Typography variant="h6" className="footer-title">Güvenli Alışveriş</Typography>
                    <Box className="payment-icons">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxYJF81xglYfbMBawRvO1jHpehtB70azqgg&s" alt="Troy" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2IdH0EXxKUveL-R_gjnMre-LRhk9p3fqow&s" alt="Visa" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS0ufrEsHLR6t3qIN4xi4f4DLvq2mT4TnXQ&s" alt="MasterCard" />
                        <img src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_american_express_card-512.png" alt="American Express" />
                    </Box>
                </Box>
                <Box className="footer-column">
                    <Typography variant="h6" className="footer-title">About us</Typography>
                    <Link href="#" className="footer-link">Who we are</Link>
                    <Link href="#" className="footer-link">Careers</Link>
                    <Link href="#" className="footer-link">Contact us</Link>
                    <Link href="#" className="footer-link">Sustainability</Link>
                    <Typography variant="h6" className="footer-title">Mobil Uygulamalar</Typography>
                    <Button href="#" className="app-button">
                        <img src="https://cihanbuyukakkas.com/wp-content/uploads/2021/04/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli.png" alt="App Store" />
                    </Button>
                    <Button href="#" className="app-button">
                        <img src="https://cihanbuyukakkas.com/wp-content/uploads/2021/04/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli_1.png" alt="Google Play" />
                    </Button>
                    <Button href="#" className="app-button">
                        <img src="https://divvydrive.com/app/wwwroot/img/store/huaweitr.png" alt="App Gallery" />
                    </Button>
                </Box>
                <Box className="footer-column">
                    <Typography variant="h6" className="footer-title">Kampanyalar</Typography>
                    <Link href="#" className="footer-link">Aktif Kampanyalar</Link>
                    <Link href="#" className="footer-link">Elite Üyelik</Link>
                    <Link href="#" className="footer-link">Hediye Fikirleri</Link>
                    <Link href="#" className="footer-link">Trendyol Fırsatları</Link>
                    <Typography variant="h6" className="footer-title">Sosyal Medya</Typography>
                    <Box className="social-icons">
                        <Facebook className="social-icon" />
                        <Twitter className="social-icon" />
                        <Instagram className="social-icon" />
                        <YouTube className="social-icon" />
                    </Box>
                </Box>
                <Box className="footer-column">
                    <Typography variant="h6" component="div" className="footer-title">Yardım</Typography>
                    <Link href="#" className="footer-link">Sıkça Sorulan Sorular</Link>
                    <Link href="#" className="footer-link">Canlı Yardım</Link>
                    <Link href="#" className="footer-link">Nasıl İade Edebilirim</Link>
                    <Link href="#" className="footer-link">İşlem Rehberi</Link>
                    <Button href="#" className="country-change-button">Ülke Değiştir</Button>
                    <img src="https://randomqr.com/assets/images/randomqr-256.png" width={'100px'} alt="QR Code" className="qr-code" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn--FJKUCzEfHodkt7L12DNnghVOYh1YdNPQ&s" width={'100px'} alt="TRGO" className="trgo-icon" />
                </Box>
            </Box>
            <Box className="footer-bottom">
                <Link href="#" className="footer-bottom-link">Çerez Tercihleri</Link>
                <Link href="#" className="footer-bottom-link">KVK ve Gizlilik Politikası</Link>
                <Link href="#" className="footer-bottom-link">DSM Grup</Link>
                <Link href="#" className="footer-bottom-link">Kullanım Koşulları</Link>
                <Typography className="footer-bottom-text">©2024 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
