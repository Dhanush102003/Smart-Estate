import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <motion.h1 
              className="text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Find Your Dream Property
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover the perfect home with our AI-powered real estate platform.
              Smart search, instant analytics, and seamless transactions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/properties"
                className="bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-600 transition-colors transform hover:scale-105 duration-200 inline-flex items-center"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
    </div>
  );
};

export default Home;