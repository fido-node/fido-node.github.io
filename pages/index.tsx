import * as React from 'react';
import Footer from '../components/Footer';
import PersonalCard from '../components/personal-card/PersonalCard';

const Home = () => {
  return (
    <div className="bg-gray-50 flex flex-col md:h-screen sm:h-full  justify-between">
      <PersonalCard />
      <Footer />
    </div>
  );
};

export default Home;
