"use client"

import Image from 'next/image';
import { useState } from 'react';
const Form = () => {
    const roles = ["buyer", "Broker", "Builder"]

    const [selectRole, setSelectRole] = useState("")


    return (
        <div className='w-[90%] xl:w-[60%] flex flex-col lg:flex-row m-auto border-[2px] border-gray-100 rounded-2xl my-8'>
            <div className='flex-1 bg-gray-50'>
                <div className='flex flex-col '>
                    <div className='m-6 space-y-2'>
                        <p className='text-orange-500 font-bold  text-start'>Property pistol's</p>
                        <p className='font-bold text-2xl text-start '>Free Expert Consultation</p>
                        <p className='text-gray-500 text-sm'>Speak to our experts and get personalized guidance today</p>
                    </div>
                    <Image className='w-full h-full' src={'/vectorimg/formimg.png'} width={500} height={500} alt='alternate' />
                </div>
            </div>
            <div className='flex-1 '>

                <form className='flex flex-col p-8 space-y-7'>
                    <span className='text-lg'>Get answers to all your questions</span>
                    <input className='p-2 border-[1px] rounded-md ' type='text' placeholder='Full name' />
                    <input className='p-2 border-[1px] rounded-md ' type='text' placeholder='Mobile number' />
                    <input className='p-2 border-[1px] rounded-md ' type='text' placeholder='Email address' />

                    <div className="flex flex-col md:flex-row  md:items-center gap-2">
                        <span className="text-sm text-gray-600 px-3">I am a</span>
                        <div className="flex gap-2 rounded-full p-1">
                            {roles.map((role) => (
                                <label
                                    key={role}
                                    className={`
                                                relative px-4 py-1 rounded-full text-sm font-medium 
                                                transition-colors cursor-pointer
                                                border-[1px] border-gray-200 
                                                ${selectRole === role
                                            ? 'bg-black text-white shadow-sm'
                                            : 'text-black-500 bg-white hover:bg-gray-50'
                                        }
                                        `}
                                >
                                    <input
                                        type="radio"
                                        name="role"
                                        value={role}
                                        checked={selectRole === role}
                                        onChange={(e) => setSelectRole(e.target.value)}
                                        className="absolute opacity-0 w-0 h-0"
                                    />
                                    {role}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row '>
                        <button className='px-4 py-2 border-[1px] border-gray-200 rounded-3xl bg-green-600 text-white' type='submit'>Request consultation</button>
                        <div className='border-l-2 border-gray-400 mx-4 my-2 px-4 flex-col md:flex-row'>
                            <p className='text-sm md:text-lg text-gray-600 font-bold'>Call Us</p>
                            <p className='text-sm '>+919702214239</p>
                        </div>
                    </div>

                    <div className='text-gray-400'>
                        <span className='text-[10px]'> authorize PROPERTY PISTOL REALTY PRIVATE LIMITED and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC</span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;