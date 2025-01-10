import Image from 'next/image';
interface ExclusiveCards {
    title: String
    image: String;
}

const ExclusiveCards = () => {
    const cardItems: ExclusiveCards[] = [
        {
            title: "Become a syndicate Broker",
            image: "/vectorimg/fourth.jpg"
        },
        {
            title: "Become a Broker",
            image: "/vectorimg/sixth.jpg"
        },
        {
            title: "Become a syndicate Broker",
            image: "/vectorimg/third.jpg"
        },
        {
            title: "Become a Broker",
            image: "/vectorimg/fourth.jpg"
        },
        {
            title: "Become a syndicate Broker",
            image: "/vectorimg/fifth.jpg"
        },
        {
            title: "Become a syndicate Broker",
            image: "/vectorimg/sixth.jpg"
        },
    ]

    return (
        <div>
            <div className='bg-red-50 bg-opacity-75 flex flex-col justify-center items-center my-10 py-8'>
            <div className='flex gap-2 items-center justify-center'>
            <p className='text-3xl mb-1'>PropertyPistol</p>
            <p className='text-3xl mb-1 text-orange-600 font-bold '>Exclusive</p>
            </div>
            <p className='text-center'>A unified platform for all property requirements, serving both individuals and brokers seamlessly.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 xl:w-[70]  2xl:w-[60%] w-[80%] justify-items-center">
                    {cardItems.map((card, index) => (
                        <div key={index} className="w-[150px] h-[150px] rounded-md flex flex-col border-[2px] my-8 border-gray-200 shadow-md items-center justify-between bg-white">
                            <h3 className="w-[60%]  text-sm text-center mt-4">{card.title}</h3>
                            <Image
                                src={`${card.image}`}
                                alt={`${card.title} property`}

                                className="rounded-t-md object-contain w-full overflow-hidden"
                                
                                width={100}
                                height={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExclusiveCards;