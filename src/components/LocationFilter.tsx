import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationFilterProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

const locations = [
  { id: 'all', name: 'All Locations' },
  { id: 'kerala', name: 'Kerala' },
  { id: 'pondicherry', name: 'Pondicherry' },
 { id: 'coimbatore', name: 'Coimbatore' },
 { id: 'tamil-nadu', name: 'Loved one' }
];

const LocationFilter: React.FC<LocationFilterProps> = ({ selectedLocation, onLocationChange }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {locations.map((location) => (
        <button
          key={location.id}
          onClick={() => onLocationChange(location.id)}
          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            selectedLocation === location.id
              ? 'bg-primary-500 text-white'
              : 'bg-white text-gray-700 hover:bg-primary-50'
          }`}
        >
          <MapPin className="h-4 w-4 mr-2" />
          {location.name}
        </button>
      ))}
    </div>
  );
};

export default LocationFilter;