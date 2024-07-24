import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy loading components
const Navbar = lazy(() => import('./Screen/Navigation/Navbar/Navbar'));
const Footer = lazy(() => import('./Screen/Navigation/Footer/Footer'));
const Home = lazy(() => import('./Screen/Pages/Home/Home'));
const AboutUs = lazy(() => import('./Screen/Pages/AboutUs/AboutUs'));
const Subsidies = lazy(() => import('./Screen/Pages/Subsidies/Subsidies'));
const Products = lazy(() => import('./Screen/Pages/Products/Products'));
const Services = lazy(() => import('./Screen/Pages/Services/Services'));
const Blog = lazy(() => import('./Screen/Pages/Blog/Blog'));
const ContactUs = lazy(() => import('./Screen/Pages/ContactUs/ContactUs'));
const ApplyFor = lazy(() => import('./Screen/Pages/ApplyFor/ApplyFor'));

const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/subsidies" element={<Subsidies />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/apply-for" element={<ApplyFor />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;




const items = [
  {
    href: "https://tasleemalquran.com",
    imgSrc:
      "https://itartificer.com/wp-content/uploads/2021/09/taleemalquranlogooo.png",
    bgUrl: "assets/images/TaleemalquranlogoooPng.png",
  },
  {
    href: "http://itaacademia.com",
    imgSrc:
      "https://itartificer.com/wp-content/uploads/2017/11/ita-academia-fit-1.png",
    bgUrl: "assets/images/ItaAcademiaFit1Png.png",
  },
  {
    href: "http://kalewal.com",
    imgSrc:
      "https://itartificer.com/wp-content/uploads/2017/11/kaliwal-fit-copy.png",
    bgUrl: "assets/images/KaliwalFitCopyPng.png",
  },
  {
    href: "http://shopmeonline.pk",
    imgSrc:
      "https://itartificer.com/wp-content/uploads/2017/11/shopme-online-fit.png",
    bgUrl: "assets/images/ShopmeOnlineFitPng.png",
  },
  {
    href: "http://writepure.com",
    imgSrc:
      "https://itartificer.com/wp-content/uploads/2017/11/writepure-fit-2.png",
    bgUrl: "assets/images/writepure.png",
  },
  {
    href: "http://mozbytech.com",
    imgSrc:
      "https://itartificer.com/wp-content/uploads/2017/11/mozbytech-fit-new.png",
    bgUrl: "assets/images/MozbytechFitNewPng.png",
  },
];
