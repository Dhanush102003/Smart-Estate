import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';
import LocationFilter from '../components/LocationFilter';
import { properties } from '../data/properties';

const Properties = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const filteredProperties = useMemo(() => {
    if (selectedLocation === 'all') return properties;

    return properties.filter(property => {
      const location = property.location.toLowerCase();
      switch (selectedLocation) {
        case 'kerala':
          return location.includes('kerala') || location.includes('munnar') || location.includes('kovalam') || location.includes('alleppey') || location.includes('kochi');
        case 'pondicherry':
          return location.includes('pondicherry') || location.includes('auroville') || location.includes('white town');
        case 'tamil-nadu':
          return location.includes('chennai') || location.includes('ooty') || location.includes('mahabalipuram');
        case 'coimbatore':
          return location.includes('coimbatore');
        default:
          return true;
      }
    });
  }, [selectedLocation]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Discover Your Dream Property
          </motion.h1>
          <LocationFilter
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No properties found in this location.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;