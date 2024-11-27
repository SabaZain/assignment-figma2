import React from 'react';
import Navbar from './Navbar/page';
import Footer from './Footer/page';
import CardLayout from "@/components/Courses";
import CardLayout1 from '@/components/CoursesCategory';
import HeroPage from './Hero/page';
import AchievementPage from './Achievement/page';
import TeamPage from './Team/page';
import TestimonialsPage from './Testimonials/page';

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <CardLayout1 />
      <AchievementPage />
      <CardLayout />
      <TeamPage />
      <TestimonialsPage />
      <Footer />
    </main>
  );
};

export default HomePage;