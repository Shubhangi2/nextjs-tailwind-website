import React from 'react';
import { Share, Heart, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';



const PropertySpecs = () => {
    return (
        <div className="grid grid-cols-5 divide-x divide-gray-200 py-4 text-center border-b-[1px] border-gray-200">
            <div className="px-4">
                <p className="text-sm text-gray-500 mb-1">Configurations</p>
                <p className="font-semibold">2 BHK, 3 BHK</p>
            </div>

            <div className="px-4">
                <p className="text-sm text-gray-500 mb-1">Possession Date</p>
                <p className="font-semibold">Dec 2025</p>
            </div>

            <div className="px-4">
                <p className="text-sm text-gray-500 mb-1">Built up Area</p>
                <p className="font-semibold">On request</p>
            </div>

            <div className="px-4">
                <p className="text-sm text-gray-500 mb-1">Carpet Area</p>
                <p className="font-semibold">1,328 - 2,230 Sq.ft</p>
            </div>

            <div className="px-4">
                <p className="text-sm text-gray-500 mb-1">Min. Price per Sqft.</p>
                <p className="font-semibold">INR 7.1 K per Sqft.</p>
            </div>
        </div>
    );
};


const PropertyBanner = () => {
    return (
        <div className="max-w-6xl mx-auto my-4 bg-white rounded-lg  overflow-hidden">
            {/* Property Details */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold">Pardos Okas Residency</h1>
                        <p className="text-sm text-gray-600 mt-1">
                            Flats by <span className="text-orange-500">Pardos Lucknow Developers</span> at OKAS Residency, Golf City, Bagiamau, Lucknow, Uttar Pradesh, India
                        </p>

                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold">INR 80.08 Lacs</p>
                        <p className="text-sm text-gray-500">Onwards</p>
                    </div>
                </div>

                {/* Action Buttons */}

                <div className='flex justify-between'>
                    <div className="flex flex-wrap gap-4  text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <span>RERA</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">UPRERAPRJ371638</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">UPRERAPRJ525944</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Agent RERA -</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">
                                UPRERAGT12730
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className=" border p-1 border-gray-200 rounded-lg hover:bg-gray-50">
                            <Heart className="w-4 h-4" />
                        </button>
                        <button className=" border p-1 border-gray-200 rounded-lg hover:bg-gray-50">
                            <Share className="w-5 h-5" />
                        </button>
                        <button className="flex items-center px-2 gap-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <Download className="w-5 h-5" />
                            Brochure
                        </button>
                        <button className="flex-1 px-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2">
                            Contact Seller
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div></div>
            </div>
            <div className="relative">
                {/* Main Image */}
                <div className="w-full">
                    <Image
                        src={"/images/comp2.png"}
                        alt={`${"title"} property`}

                        className="rounded-t-md object-cover w-full h-[400px] overflow-hidden"

                        width={1200}
                        height={500}
                    />

                </div>
            </div>

            <PropertySpecs/>
        </div>
    );
};

export default PropertyBanner;