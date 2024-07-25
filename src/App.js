import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import ProductCarousel from './components/ProductCarousel';
import { Container, Grid } from '@mui/material';
import ImageCard from './components/ImageCard';
import FlashProductsCarousel from './components/FlashProductsCarousel';
import BestSellerCarousel from './components/BestSellerCarousel';
import AdvantageousProductsCarousel from './components/AdvantageousProductsCarousel';
import HoverImageGrid from './components/HoverImageGrid';
import TrendingButtons from './components/TrendingButtons';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" className='mt-2'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Carousel />
          </Grid>
          <Grid item xs={12}>
            <Highlights />
          </Grid>
          <Grid item xs={12}>
            <ProductCarousel />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ImageCard />
        </Grid>
        <Grid item xs={12}>
          <FlashProductsCarousel />
        </Grid>
        <Grid item xs={12}>
          <BestSellerCarousel />
        </Grid>
        <Grid item xs={12}>
          <AdvantageousProductsCarousel />
        </Grid>
        <Grid item xs={12}>
          <HoverImageGrid />
        </Grid>
        <Grid item xs={12}>
          <TrendingButtons />
        </Grid>



      </Container>
      <Footer />
    </div>
  );
}

export default App;
