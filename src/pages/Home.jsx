import React from 'react';
import Banner from '../components/Banner';
//import Cards from '../components/Cards';
import img1 from '../assets/img1.png';

const Home = () => {
  return (
    <Banner
      bannerImg={img1}
      title="Chez vous, partout et ailleurs"
    />

  );
};

export default Home;