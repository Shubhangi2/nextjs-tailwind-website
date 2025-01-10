import Image from 'next/image';
import { TopProjectInterface } from '../../../(dashboard)/home/types/top_project_interface';
import TopProjects from './top_projects';

const TopProjectCards = () => {
    const projects: TopProjectInterface[] = [
        {
            image: '/homebg.jpg',
            logo: '/images/comp1logo.jpeg',
            title: 'L&T Island Cove',
            subtitle: '2 & 3 BHK apartment for sale in Mahim West by NnT Realty',
            description: '',
            onwards: 'INR 2.9 Cr',
            configuration: '2, 3 BHK',
            sqft: '740-1,150',
            possession: 'Aug 2028',
        },
        {
            image: '/images/comp2.png',
            logo: '/images/comp2logo.jpeg',
            title: 'L&T Gateway Sewri',
            subtitle: '2 & 3 BHK apartment for sale in Mahim West by NnT Realty',
            description: '',
            onwards: 'INR 2.9 Cr',
            configuration: '2, 3 BHK',
            sqft: '740-1,150',
            possession: 'Aug 2028',
        }
    ];

    return (
        <div className="w-full m-4">
            <div className='sm:w-[90%]  lg:w-[60%]  w-[95%] m-auto'>

            <h2 className="text-xl font-bold mb-4">Top Projects</h2>
            <div className="flex  gap-8 justify-center items-center">
                {projects.map((item, index) => (
                    <div
                        key={`project-${index}-${item.title}`}
                        className="border border-gray-200 rounded-md shadow-md flex-1 min-w-[400px] max-w-[600px]"
                    >
                        <div className="relative w-full h-[200px]">
                            <Image
                                src={`${item.image}`}
                                alt={`${item.title} property`}
                                fill
                                className="rounded-t-md object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="flex gap-2 p-2 ">
                            <div className="relative w-[30px] h-[30px]">
                                <Image
                                    src={`${item.logo}`}
                                    alt={`${item.title} logo`}
                                    width={50}
                                    height={50}
                                    className="rounded-md"
                                    quality={100}
                                />
                            </div>

                            <div className='flex justify-between flex-1'>
                                <div>
                                    <p className="font-semibold text-sm">{item.title}</p>
                                    <p className="text-xs text-gray-600">{item.subtitle}</p>
                                </div>
                                <div className='flex items-start justify-start'>

                                    <p className='px-1 text-[10px] border border-gray-200 rounded-md shadow-md'>Rera verified</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-4 m-5'>
                            <div className='pl-3 '>
                                <p className='text-md font-bold'>{item.onwards}</p>
                                <p className='text-xs text-gray-600'>Onwards</p>
                            </div>
                            <div className='border-l-2 border-gray-300 pl-3'>
                                <p className='text-md font-bold'>{item.configuration}</p>
                                <p className='text-xs text-gray-600'>Configuration</p>
                            </div>
                            <div className='border-gray-300 border-l-2 pl-3'>
                                <p className='text-md font-bold'>{item.sqft}</p>
                                <p className='text-xs text-gray-600'>Sq.ft</p>
                            </div>
                            <div className='border-gray-300 border-l-2 pl-3'>
                                <p className='text-md font-bold'>{item.possession}</p>
                                <p className='text-xs text-gray-600'>Profession</p>
                            </div>
                        </div>


                        <div className='flex justify-between m-4'>
                            <div className='flex items-center '>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <p className='px-2 pt-1 text-sm'>Add to compare</p>
                            </div>
                            <div>
                            <button type="button" className='p-1 border-[1px] rounded-md border-orange-500'><p className='text-orange-400 py-[2px] px-4 text-[14px]'>Get in Touch</p></button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default TopProjectCards;