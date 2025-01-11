"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react'


interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
}


export default function Page() {
    const [users, setUsers] = useState<User[]>([])

    console.log('users', users)



    async function fetchUsers() {
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json()
        setUsers(data.users)

        console.log(users)
    }
    useEffect(() => {
        fetchUsers()
    }, [])



    return (
        <div>
            {users && users.map((user) => (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`} >
                        <li className='hover:cursor-pointer'>{user.firstName}</li>
                    </Link>
                </div>
            ))}
        </div>

    );
}