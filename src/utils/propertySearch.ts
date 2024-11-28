import { Property } from '../data/properties';

export const filterProperties = (
  properties: Property[],
  location: string,
  propertyType: string,
  minPrice: string,
  maxPrice: string
): Property[] => {
  return properties.filter(property => {
    // Location matching
    const locationMatch = !location || 
      property.location.toLowerCase().includes(location.toLowerCase());

    // Property type matching
    const typeMatch = !propertyType || 
      property.type.toLowerCase() === propertyType.toLowerCase();

    // Price matching
    const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
    const minPriceValue = minPrice ? parseInt(minPrice) : 0;
    const maxPriceValue = maxPrice ? parseInt(maxPrice) : Infinity;
    const priceMatch = propertyPrice >= minPriceValue && propertyPrice <= maxPriceValue;

    return locationMatch && typeMatch && priceMatch;
  });
};

export const formatPrice = (price: string): number => {
  return parseInt(price.replace(/[^0-9]/g, ''));
};