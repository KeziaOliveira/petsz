import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Feed" description="Home do site Petsz, com feed de fotos" />
      <Feed />
    </section>
  );
};

export default Home;
