import './App.css';
import About from './components/About';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import HealthTips from './components/HealthTips';
import Hero from './components/HeroSection';
import Navbar from './components/Navbar';
import Newsletter from './components/NewsLetter';
import Prescriptions from './components/Prescriptions';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
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
            <FeaturedProducts />
        </div>
    );
}

function HealthTipsPage() {
    return (
        <div>
            <h1>Health Tips Page</h1>
            <HealthTips />
        </div>
    );
}

function TestimonialsPage() {
    return (
        <div>
            <h1>Testimonials Page</h1>
            <Testimonials />
        </div>
    );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/about" element={<About />} />
        <Route path="/healthtips" element={<HealthTipsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
      <Footer />
    </>
  );
}