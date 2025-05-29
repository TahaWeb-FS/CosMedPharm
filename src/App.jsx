import './App.css';
import About from './components/about/About';
import Categories from './components/home/Categories';
import Checkout from './components/Checkout';
import FeaturedProducts from './components/home/FeaturedProducts';
import Footer from './components/layouts/Footer';
import HealthTips from './components/home/HealthTips';
import Hero from './components/home/HeroSection';
import Navbar from './components/layouts/Navbar';
import Newsletter from './components/home/NewsLetter';
import Prescriptions from './components/prescriptions/Prescriptions';
import Products from './components/products/Products';
import Testimonials from './components/home/Testimonials';
import { Routes, Route } from 'react-router-dom';

// Create a separate component for each page
function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <HealthTips />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function ProductsPage() {
    return (
        <div>
            <h1>Products Page</h1>
            <Products />
        </div>
    );
}

function PrescriptionsPage() {
    return (
        <div>
            <h1>Health Tips Page</h1>
            <Prescriptions />
        </div>
    );
}

function AboutPage() {
    return (
        <div>
            <h1>Testimonials Page</h1>
            <About />
        </div>
    );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/prescriptions" element={<PrescriptionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}