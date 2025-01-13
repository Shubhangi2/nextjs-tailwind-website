import { Search, LocateFixed } from 'lucide-react';

const SearchBar = () => {
    return(
        <div className='flex bg-white p-2 rounded-md gap-2 w-full justify-between' >
        <Search className='h-[20px] w-[20px] stroke-1 ' />
        <input type="text" placeholder="Search properties by name, location, or price range" className=" focus:outline-none flex-1 border-none" />
        <LocateFixed className='h-[22px] w-[22px] stroke-1 ' />
    </div>
    )
}

export default SearchBar;