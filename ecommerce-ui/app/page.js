'use client';
import BuyerList from '@/components/BuyerList';
import SellerList from '@/components/SellerList';
import React from 'react';

const Home = () => {
  const userRole = localStorage.getItem('userRole');
  return (
    <div>
      <p className="text-3xl italic">
        Welcome {localStorage.getItem('firstName')}
        {userRole === 'buyer' ? <BuyerList /> : <SellerList />}
      </p>
    </div>
  );
};

export default Home;
