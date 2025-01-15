import { Heart } from 'lucide-react';
import Image from 'next/image';
interface PropertyCardProps {
    title: string;
    location: string;
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

const PropertyCard = ({
    title,
    location,
    configurations,
    builtUpArea,
    carpetArea,
    price,
    imageUrl = "/images/comp2.png",
    trending = false,
}: PropertyCardProps) => {
    return (
        <div className="w-full rounded-lg bg-white shadow-md overflow-hidden">
            <div className="relative ">
                <div className="relative w-full h-[200px] overflow-hidden">
                    <Image
                        src={`${imageUrl}`}
                        alt={`${title} property`}

                        className="rounded-t-md object-contain w-full overflow-hidden"

                        width={500}
                        height={200}
                    />
                </div>
                {trending && (
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-md text-xs flex items-center gap-1">
                        <span className="text-blue-600">↗</span>
                        <span className="font-medium">Trending</span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-medium text-lg text-gray-900 truncate">{title}</h3>
                        <p className="text-sm text-gray-600">
                            {configurations} Flat for Sale in {location}
                        </p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <Heart className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <p className="text-sm text-gray-500">Built up Area</p>
                        <p className="font-medium">{builtUpArea}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Carpet Area</p>
                        <p className="font-medium">{carpetArea}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-semibold">INR {price.total}</span>
                        <span className="text-sm text-gray-500">Onwards</span>
                    </div>
                    <p className="text-sm text-gray-600">INR {price.perSqFt} Per Sq.ft.</p>
                </div>

                <label className="flex items-center mb-4 text-sm">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-600">Add to compare</span>
                </label>

                <button className="w-full bg-white border border-orange-500 text-orange-500 py-2 rounded-md hover:bg-orange-50 transition-colors">
                    Get in Touch
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;