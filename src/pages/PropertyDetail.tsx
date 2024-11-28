import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Home, User, Download, CreditCard, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { jsPDF } from 'jspdf';
import { properties } from '../data/properties';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface BookingForm {
  name: string;
  contact: string;
  email: string;
  address: string;
}

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BookingForm>();

  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return <div className="text-center py-12">Property not found</div>;
  }

  const onSubmit = (data: BookingForm) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setShowPayment(true);
  };

  const handleBooking = () => {
    addToCart(property);
    setBookingSuccess(true);
    setTimeout(() => {
      navigate('/cart');
    }, 2000);
  };

  const downloadDocument = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Property Details', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Property: ${property.title}`, 20, 40);
    doc.text(`Location: ${property.location}`, 20, 50);
    doc.text(`Price: ${property.price}`, 20, 60);
    doc.text(`Area: ${property.sqft} sq.ft`, 20, 70);
    doc.text(`Owner: ${property.owner}`, 20, 80);
    doc.text(`Type: ${property.type}`, 20, 90);
    doc.text('\nAmenities:', 20, 100);
    property.amenities.forEach((amenity, index) => {
      doc.text(`• ${amenity}`, 30, 110 + (index * 10));
    });
    
    doc.save('property-details.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="mt-4 grid grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 mr-2 text-primary-500" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {property.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Home className="h-5 w-5 mr-2" />
                  {property.sqft} sq.ft
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-2" />
                  {property.owner}
                </div>
                <div className="text-2xl font-bold text-primary-600">
                  {property.price}
                </div>
              </div>

              <p className="text-gray-600 mb-6">{property.description}</p>

              <div className="space-x-4 mb-6">
                <button
                  onClick={downloadDocument}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Details
                </button>
              </div>

              {!showPayment && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <input
                      {...register('name', { required: true })}
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                  </div>
                  <div>
                    <input
                      {...register('contact', { required: true })}
                      placeholder="Contact Number"
                      className="w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.contact && <span className="text-red-500 text-sm">Contact is required</span>}
                  </div>
                  <div>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                  </div>
                  <div>
                    <input
                      {...register('address', { required: true })}
                      placeholder="Address"
                      className="w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.address && <span className="text-red-500 text-sm">Address is required</span>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Proceed to Payment
                  </button>
                </form>
              )}

              {showPayment && !bookingSuccess && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={handleBooking}
                      className="p-4 border rounded-md hover:bg-primary-50 transition-colors"
                    >
                      Credit Card
                    </button>
                    <button
                      onClick={handleBooking}
                      className="p-4 border rounded-md hover:bg-primary-50 transition-colors"
                    >
                      UPI
                    </button>
                  </div>
                </div>
              )}

              {bookingSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-600 py-4"
                >
                  <Check className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-lg font-semibold">Booking Successful!</p>
                  <p>Redirecting to cart...</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyDetail;