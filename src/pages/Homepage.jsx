import React from 'react';
import Hero from '../component/Hero';
import HomeCard from '../component/HomeCard';
import JobListing from '../component/JobListing';
import ViewAllJobs from '../component/ViewAllJobs';

const Homepage = () => {
  return (
    <div>
      <Hero /> 
      <HomeCard />
      <JobListing isHome={true}/>
      <ViewAllJobs />
    </div>
  )
};

export default Homepage;