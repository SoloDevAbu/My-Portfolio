import profile from '../assets/profileImage.png'

const About = () => {
    return (
        //<div className="flex flex-col items-center justify-center text-center px-10 xl:px-16 min-h-screen">
        //    <img className='pb-2 size-44 sm:size-52 md:size-60 rounded-full border-white' src={profile} alt="Abu Bakkar Siddique" />
        //    <h1 className='py-1 text-base sm:text-xl font-sans font-bold text-white'>HI</h1>
        //    <h1 className='py-1 text-lg sm:text-2xl font-sans font-bold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>I am Abu Bakkar Siddique</h1>
        //    <h2 className='py-1 text-base sm:text-xl font-sans font-semibold bg-yellow-500 rounded-sm p-1'>A Tech Enthusiast B.Tech 3rd year student</h2>
        //    <p className='pt-3 text-xs sm:text-base font-sans font-semibold text-gray-400'> a passionate web developer with expertise in modern JavaScript frameworks and libraries. I specialize in building dynamic and responsive web applications using React, Node.js, and other cutting-edge technologies. With a strong foundation in backend development and a keen eye for user-friendly interfaces, I strive to create seamless digital experiences. I'm constantly learning and pushing my limits to deliver innovative solutions.</p>
        // </div>
        <div className='px-10 py-16'>
            <div className='flex pb-10'>
                <div className='pr-5 size-44'>
                    <img src={profile} alt="Abu" className='rounded-full border-4' />
                </div>
                <div className='text-center bg-neutral-950 p-4 rounded-2xl font-sans font-semibold'>
                    <h1>
                        <span className='text-2xl'>Hi,<br /> I am Abu Bakkar Siddique</span>
                        <br />
                        <span className='text-sm'>A Tech Enthusiast B.Tech Student</span>
                    </h1>
                </div>
            </div>
            <div className='bg-neutral-950 p-5 rounded-2xl text-gray-400'>
                <p>
                    a passionate web developer with expertise in modern JavaScript frameworks and libraries. I specialize in building dynamic and responsive web applications using React, Node.js, and other cutting-edge technologies. With a strong foundation in backend development and a keen eye for user-friendly interfaces, I strive to create seamless digital experiences. I'm constantly learning and pushing my limits to deliver innovative solutions.
                </p>
            </div>
        </div>
    )
}

export default About