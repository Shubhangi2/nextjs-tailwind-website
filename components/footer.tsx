import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=" text-white w-full">
            <div className="text-[15px]">
                <div className='w-full py-8  bg-gray-950'>
                    <div className=" max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

                        <div className="flex flex-col  items-center md:items-start space-y-4">
                            <p className="md:text-xl text-center text-md md:text-left">
                                Welcome to a new age <br /> of home buying
                            </p>
                            <Image
                                src="/footerimg.png"
                                width={150}
                                height={150}
                                alt="Footer logo"
                            />
                        </div>
                        <div className="grid col-span-2 grid-cols-2 gap-8">
                            <div className="flex flex-col items-center md:items-start space-y-4">
                                <h4 className="font-bold tracking-wider">OUR SERVICES</h4>
                                <ul className="space-y-3 text-center md:text-left">
                                    <li><a href="/builder-services" className="hover:underline">Builder Services</a></li>
                                    <li><a href="/broker-services" className="hover:underline">Broker Services</a></li>
                                    <li><a href="/loan-services" className="hover:underline">Loan Services</a></li>
                                    <li><a href="/nri-desk" className="hover:underline">NRI Desk</a></li>
                                </ul>
                            </div>

                            <div className="flex flex-col items-center md:items-start space-y-4">
                                <h4 className="font-bold tracking-wider">KNOW US</h4>
                                <ul className="space-y-3 text-center md:text-left">
                                    <li><a href="/about-us" className="hover:underline">About Us</a></li>
                                    <li><a href="/careers" className="hover:underline">Careers</a></li>
                                    <li><a href="/blog" className="hover:underline">Blog</a></li>
                                    <li><a href="/testimonials" className="hover:underline">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <h4 className="font-bold tracking-wider">REACH US</h4>
                            <ul className="space-y-3 text-center md:text-left">
                                <li><a href="/offices" className="hover:underline">Offices</a></li>
                                <li><a href="tel:+919702212438" className="hover:underline">Toll free: +919702212438</a></li>
                                <li><a href="mailto:Support@propertypistol.com" className="hover:underline">Support@propertypistol.com</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <h4 className="font-bold tracking-wider">BROKER APP</h4>
                            <Image
                                src="/qr.png"
                                width={120}
                                height={120}
                                className="rounded-md"
                                alt="QR Code"
                            />
                            <p className="text-center text-sm">SCAN THE QR OR DOWNLOAD IT FROM</p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <a href="#" className="flex items-center space-x-2 bg-white rounded-lg px-2 py-1">
                                    <Image
                                        src="/apple.png"
                                        width={30}
                                        height={18}
                                        alt="App Store"
                                    />
                                    <div className="text-black leading-tight">
                                        <p className="text-xs m-0">Download on</p>
                                        <p className="text-sm font-medium m-0">App Store</p>
                                    </div>
                                </a>

                                <a href="#" className="flex items-center space-x-2 bg-white rounded-lg px-2 py-1">
                                    <Image
                                        src="/playstore.png"
                                        width={28}
                                        height={18}
                                        alt="Play Store"
                                    />
                                    <div className="text-black leading-tight">
                                        <p className="text-xs m-0">Download on</p>
                                        <p className="text-sm font-medium m-0">Play Store</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second grid */}
                <div className='w-full py-8 leading-8 bg-black'>
                    <div className=' max-w-[85%] mx-auto  flex flex-col xl:flex-row justify-between items-center'>

                        {/* first section */}
                        <div >
                            <p className='text-center lg:text-start'>AGENT RERA: A51700000043</p>
                            <div className='flex flex-col sm:flex-row items-center sm:items-start'>
                                <p>Corporate Office:</p>
                                <p className='text-center'>301, Third Floor, Lunkad Sky Vista, Viman Nagar,<br className='sm:hidden'/> Pune, Maharashtra ‑ 411014</p>
                            </div>
                            <div className='flex  flex-col sm:flex-row items-center sm:items-start'>
                                <p>Global Head Office:</p>
                                <p className='text-center'>907‑908,‍ NMS Titanium, Plot‑74, Sector 15, CBD Belapur,<br className='sm:hidden'/> Navi Mumbai ‑ 400614</p>
                            </div>
                        </div>


                        <div>
                            <div className='flex justify-center sm:justify-end'>
                                <a href="/builder-services" className="hover:cursor-pointer">Privacy policy</a>
                                <span>|</span>
                                <a href="/builder-services" className="hover:cursor-pointer">User agreement</a>
                                <span>|</span>
                                <a href="/builder-services" className="hover:cursor-pointer">Desclaimer</a>
                            </div>
                            <p>All Rights Reserved. © 2025 PropertyPistol Pvt. Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;