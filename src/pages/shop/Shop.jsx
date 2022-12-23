import React, { useState } from 'react';
import { Container } from '@mui/material';
import Intro from 'components/shared/Intro/Intro';
import Header from 'components/shared/Header/Header';
import Navbar from 'components/shop/Navbar/Navbar';
import Products from 'components/shop/Products/Products';

const Shop = () => {
  const [query, setQuery] = useState('');
  return (
    <div>
      <Intro />
      <Container maxWidth="xl">
        <Header title={'shop'} buttonTitle={'go to shop'} to={'/'} />
        <Navbar setQuery={setQuery} />
        <Products query={query} />
      </Container>
    </div>
  );
};

export default Shop;
