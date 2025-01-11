'use client'

import useSWR from 'swr';
import {useParams} from 'next/navigation'
interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
}


export default function Page() {
    const params = useParams();
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const id = params.id;

    const { data, error, isLoading } = useSWR<User>(`https://dummyjson.com/users/${id}`, fetcher);
    if (error) {
        return (
            <div className="p-4">
                <h1>Error occurred while fetching users</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="p-4">
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <div className="p-4">
            {data && (
                <div key={data.id} className="mb-4">
                    <h2>{data.firstName}</h2>
                    <h2>{data.lastName}</h2>
                    <p>{data.email}</p>
                </div>
            )}
        </div>
    );
}




