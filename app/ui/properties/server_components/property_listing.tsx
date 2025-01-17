
import PropertyCard from '../property_card';
import { getProperties } from '@/app/api/api_handler';
import { PropertyFilters } from '../property_filters';
import Pagination from '@/components/pagination';
// import { PropertyFilters } from './property_filters';

export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  project_name: string;
  flat_types: string;
  carpet_area: string;
  built_up_area: string | null;
  avg_price: string | null;
  region_name: string;
  seo_keywords: string;
  image_url: string[];
}

export interface Data {
  count: number;
  rows: Property[]
}
export default async function PropertyListings() {
    try {
      const res = await getProperties();
      const data: Data = res.data.data;
      console.log(data);
      
      const startIndex = 1;
      const endIndex = Math.min(9, data.count);
  
      return (
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold mb-6">
            Real Estate Lucknow - Property to buy in Lucknow
          </h1>
  
          <PropertyFilters 
            totalCount={data.count}
            startIndex={startIndex}
            endIndex={endIndex}
          />
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.rows.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.project_name}
                location={`${property.region_name}, ${property.location}`}
                configurations={property.flat_types}
                builtUpArea={property.built_up_area || 'Not available'}
                carpetArea={property.carpet_area}
                price={{
                  total: property.price,
                  perSqFt: property.avg_price || 'Not available'
                }}
              />
            ))}
          </div>
          {/* <Pagination 
                totalPages={data.count} currentPage={0} changePage={function (page: number): void {
                  throw new Error('Function not implemented.');
              } }/> */}
        </div>

      );
    } catch (error) {
      console.error('Failed to fetch properties:', error);
      return (
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-red-600">
            Error loading properties. Please try again later.
          </div>
        </div>
      );
    }
  }