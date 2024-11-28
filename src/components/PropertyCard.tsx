import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Home className="h-4 w-4 mr-1" />
          {property.sqft} sq.ft
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <User className="h-4 w-4 mr-1" />
          {property.owner}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary-600">{property.price}</span>
          <Link
            to={`/property/${property.id}`}
            className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors flex items-center"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;