import { Search, LocateFixed } from 'lucide-react';

const SearchBar = () => {
    return(
        <div className='flex bg-white p-3 rounded-md gap-2 w-full justify-between' >
        <Search color="#374151"  className='h-[20px] w-[20px] ' />
        <input type="text" placeholder="Search properties by name, location, or price range" className=" focus:outline-none flex-1 " />
        <LocateFixed color="#374151"  className='h-[22px] w-[22px]  ' />
    </div>
    )
}

export default SearchBar;