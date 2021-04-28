import * as React from 'react';
import Footer from '../components/Footer';
import PersonalCard from '../components/personal-card/PersonalCard';

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col h-screen justify-between">
      <PersonalCard />
      <Footer />
    </div>
  );
};

export default Home;
