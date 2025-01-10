import { MapPin, Search, LocateFixed, SlidersHorizontal } from 'lucide-react';
import TopProjects from '../../ui/home/components/top_projects';
import TopProjectCards from '../../ui/home/components/top_project_card';
import {TopProjectInterface} from './types/top_project_interface';
import ExclusiveCards from '@/app/ui/home/components/exclusive_cards';
import Form from '@/app/ui/home/components/form';
export default function Page() {
  
    return (
        <section>
            {/* background */}
            <div className="relative flex justify-center items-center bg-[url('/homebg.jpg')] bg-cover bg-center h-[500px] w-full">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"></div>
                <div>
                    <h1 className="text-white relative z-10 text-3xl font-semibold tracking-wide">PropertyPistol - Flats, Apartments for Sale in Pune</h1>
                    <div className="relative flex gap-2 my-3">
                        <div className='flex gap-1 items-center bg-white p-2 rounded-md'>
                            <MapPin className='h-[22px] w-[22px] stroke-1.5 ' />
                            <h2 className="text-black ">Pune</h2>
                        </div>
                        <div className='flex bg-white p-2 rounded-md gap-2 w-full justify-between' >
                            <Search className='h-[22px] w-[22px] stroke-1 ' />
                            <input type="text" placeholder="Search properties by name, location, or price range" className=" focus:outline-none flex-1 border-none" />
                            <LocateFixed className='h-[22px] w-[22px] stroke-1 ' />
                        </div>
                        <div className='bg-white p-2 rounded-md'>
                            <SlidersHorizontal className='h-[22px] w-[22px] stroke-1 ' />
                        </div>

                        <div className='bg-orange-500 p-2 rounded-md'>
                            <h2 className='text-white'>Search</h2>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>

            {/* top Projects*/}
            {/* <TopProjects/> */}

            <TopProjectCards/>
            <ExclusiveCards/>
            <Form/>
        </section>
    );
}
