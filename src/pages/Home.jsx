import React from 'react';
import useData from '../datas/useData';
import Cards from '../components/Cards';
import Banner from '../components/Banner';
import main from '../assets/main.png';

const Home = () => {
  const data = useData();
  return (
    <>
      <Banner bannerImg={main} title="Chez vous, partout et ailleurs" />

      <Cards data={data} />

    </>
  );
};

export default Home;