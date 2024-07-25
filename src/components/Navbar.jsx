import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Badge, InputBase, Container } from '@mui/material';
import { Search as SearchIcon, FavoriteBorder as FavoriteIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className="bg-white shadow-md">
            <AppBar position="fixed" className="bg-white shadow-none" style={{ backgroundColor: 'white', color: 'black' }}>
                <Container maxWidth="lg">
                    <Toolbar className="flex justify-between items-center">
                        <div className="flex items-center">
                            {/* Logo */}
                            <img
                                src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
                                alt="trendyol logo"
                                style={{ width: '146px', height: '100%', marginBottom: '-10px', marginLeft: 'px' }}
                            />
                        </div>

                        {/* Search Bar */}
                        <div className="relative mx-4 flex-1" style={{ maxWidth: '600px' }}>
                            <InputBase
                                placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                                startAdornment={
                                    <SearchIcon />
                                }
                                style={{
                                    fontSize: '14px',
                                    color: '#333',
                                    backgroundColor: '#f3f3f3',
                                    border: '2px solid rgba(0, 0, 0, 0)',
                                    borderRadius: '6px',
                                    padding: '10px 15px',
                                    boxSizing: 'border-box',
                                    outline: 'none',
                                    transition: 'all ease .3s',
                                    height: '42px',
                                    width: '100%'
                                }}
                            />
                        </div>

                        {/* Right Side Icons */}
                        <div className="flex items-center space-x-4">
                            <Button color="inherit" startIcon={<AccountCircleIcon />} className="text-black normal-case">
                                Giriş Yap
                            </Button>
                            <Button color="inherit" startIcon={<FavoriteIcon />} className="text-black normal-case">
                                Favorilerim
                            </Button>
                            <IconButton color="inherit">
                                <Badge badgeContent={0} sx={{ '& .MuiBadge-badge': { backgroundColor: '#F27A1A' } }}>
                                    <ShoppingCartIcon sx={{ color: 'black' }} />
                                </Badge>
                                <span className="ml-2">Sepetim</span>
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Navigation Links */}
            <div className="bg-gray-100 py-1 mt-16">
                <Container maxWidth="lg">
                    <div className="flex justify-center space-x-4 text-sm">
                        <Button sx={{ color: 'black' }} className="normal-case">Kadın</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Erkek</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Anne & Çocuk</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Ev & Yaşam</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Süpermarket</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Kozmetik</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Ayakkabı & Çanta</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Elektronik</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Spor & Outdoor</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Çok Satanlar</Button>
                        <Button sx={{ color: 'black' }} className="normal-case">Flaş Ürünler</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
