
const TopProjects = ()=>{
    const cities = [
        "Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad","Jaipur","Surat","Lucknow","Kanpur","Nagpur","Indore","Patna","Bhopal","Agra","Coimbatore"];

        return(
            <div className="h-auto p-4 w-[90%] m-auto">
                <h2 className="text-xl font-bold mb-4">Top Projects</h2>
                <ul className="flex flex-wrap gap-3">
                    {cities.map((city, index)=>(
                        <li key={index}><a className=" border-gray-400 rounded-2xl border-[1px] p-2" href="#">{city}</a></li>
                    ))}
                </ul>
            </div>
        );
}

export default TopProjects;
