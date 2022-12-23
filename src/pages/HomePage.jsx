import React from 'react';
import AboutGE from 'components/home/AboutGE/AboutGE';
import Intro from 'components/shared/Intro/Intro';
import NewArrivals from 'components/home/NewArrivals/NewArrivals';
import Tabs from 'components/home/Tabs/Tabs';
import Header from 'components/shared/Header/Header';
import { Container } from '@mui/material';

export const HomePage = () => {
  return (
    <>
      <Intro />
      <Container maxWidth="xl">
        <Header
          title={'Arrivals'}
          buttonTitle={'write a post'}
          to={'/add-post'}
        />
        <NewArrivals />
        <AboutGE />
        <Tabs />
      </Container>
    </>
  );
};

