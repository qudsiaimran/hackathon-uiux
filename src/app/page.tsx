'use client';
import React from 'react'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/New Arrivals';
import OnSale from '@/components/On Sale';
import Shop from '@/components/Shop';
import Footer from '@/components/Footer';
import ProductDetailPage from '@/components/Product Detail Page';

const page = () => {
  return (
    <div>
   <div>
      <main>
      <Header />
      <Hero />
      <NewArrivals />
      <OnSale />
      <Shop />
      <Footer />
      <ProductDetailPage />
      </main>
    </div>
    </div>
  )
}

export default page
