import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Building2, DollarSign, MapPin, Home, Bath, BedDouble } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import { useCart } from '../context/CartContext';
import { filterProperties } from '../utils/propertySearch';

const propertyTypes = [
  { value: '', label: 'All Types' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'cottage', label: 'Cottage' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'resort', label: 'Resort' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'heritage', label: 'Heritage' }
];

const RentalAI = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searched, setSearched] = useState(false);

  const filteredResults = useMemo(() => {
    if (!searched) return [];
    return filterProperties(properties, location, propertyType, minPrice, maxPrice);
  }, [location, propertyType, minPrice, maxPrice, searched]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);

    // Simulate AI processing delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleBooking = (property: typeof properties[0]) => {
    addToCart(property);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">AI-Powered Property Search</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-12">
              Find properties that match your criteria with our intelligent search system
            </p>

            <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location in India"
                    className="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/70 px-4 py-2"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none text-white px-4 py-2 appearance-none"
                  >
                    {propertyTypes.map(type => (
                      <option key={type.value} value={type.value} className="text-gray-900">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min Price (₹)"
                    className="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/70 px-4 py-2"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max Price (₹)"
                    className="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/70 px-4 py-2"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="md:col-span-4 bg-white text-primary-600 px-6 py-2 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <span className="animate-spin">↻</span>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Search Properties
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {searched && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-2">
                {filteredResults.length} Properties Found
              </h2>
              {(minPrice || maxPrice) && (
                <p className="text-gray-600">
                  Price range: 
                  {minPrice ? ` ₹${parseInt(minPrice).toLocaleString()} -` : ' Up to'}
                  {maxPrice ? ` ₹${parseInt(maxPrice).toLocaleString()}` : ''}
                </p>
              )}
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResults.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 className="h-4 w-4 mr-1" />
                    {property.type}
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Home className="h-4 w-4 mr-1" />
                    {property.sqft} sqft
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
                  <button 
                    onClick={() => handleBooking(property)}
                    className="w-full bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center"
                  >
                    {/* <DollarSign className="h-4 w-4 mr-2" /> */}
                    ₹ Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {searched && filteredResults.length === 0 && !loading && (
            <div className="text-center text-gray-600 py-12">
              <p className="text-xl mb-2">No properties found matching your criteria.</p>
              <p>Try adjusting your price range or exploring different locations.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RentalAI;