import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyCard from './property_card';

interface Property {
  id: string;
  title: string;
  location: {
    area: string;
    city: string;
  };
  configurations: string;
  builtUpArea: string;
  carpetArea: string;
  price: {
    total: string;
    perSqFt: string;
  };
  imageUrl?: string;
  trending?: boolean;
}

const PropertyListings = () => {
  // Sample data - in real app, this would come from API
  const properties: Property[] = [
    {
      id: '1',
      title: 'Pardos Okas Resid',
      location: {
        area: 'Sushant Golf City',
        city: 'Lucknow'
      },
      configurations: '2 & 3 BHK Flat',
      builtUpArea: 'On request',
      carpetArea: '862 - 1,159 Sq.ft.',
      price: {
        total: '80.08 Lacs',
        perSqFt: '9.29 K'
      },
      trending: true
    },
    {
      id: '2',
      title: 'Rishita Mulberry H',
      location: {
        area: 'Sushant Golf City',
        city: 'Lucknow'
      },
      configurations: '2 & 3 BHK Apartment',
      builtUpArea: 'On request',
      carpetArea: '1,328 - 2,230 Sq.ft.',
      price: {
        total: '94.29 Lacs',
        perSqFt: '7.1 K'
      },
      trending: true
    },
    {
      id: '3',
      title: 'Buildia Galaxy',
      location: {
        area: 'Kursi Road',
        city: 'Lucknow'
      },
      configurations: '1 BHK Flat',
      builtUpArea: 'On request',
      carpetArea: '543 Sq.ft.',
      price: {
        total: '1.69 Cr',
        perSqFt: '31.1 K'
      }
    }
  ];

  return (
    <div className="container mx-auto  px-4 py-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">
        Real Estate Lucknow - Property to buy in Lucknow
      </h1>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center px-3 py-2 border rounded-md text-sm">
            Relevance
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          <span className="text-sm text-gray-500">
            Showing 1-20 of 76
          </span>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            location={`${property.location.area}, ${property.location.city}`}
            configurations={property.configurations}
            builtUpArea={property.builtUpArea}
            carpetArea={property.carpetArea}
            price={property.price}
            trending={property.trending}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <div className="fixed top-1/2 transform -translate-y-1/2 w-full left-0 pointer-events-none">
        <div className="container mx-auto px-4 flex justify-between">
          <button className="pointer-events-auto bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="pointer-events-auto bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default PropertyListings;