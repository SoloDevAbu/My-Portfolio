import React from 'react'
import EducationCard from '../components/EducationCard'
import devLogo from '../assets/education/100xDevs.png'
import AULogo from '../assets/education/AU.jpg'

const NewSkills = () => {
    return (
        <div>
            <div className='px-7 pt-7 sm:px-9 sm:pt-7 lg:px-12 lg:pt-12 mt-4 sm:mt-6 text-start font-sans'>
                <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl pb-8'>Tools & Technologies</h1>
                <div className='flex flex-wrap gap-3 font-semibold text-base sm:text-lg lg:text-xl text-gray-800'>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>HTML</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>CSS</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>JavaScript</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>C++</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>NodeJS</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>Vite</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>React</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>Express</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>git</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>GitHub</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>MongoDB</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>TailwindCSS</h1>
                    </div>
                    <div className='bg-gray-200 px-2.5 lg:px-3.5 py-0.5 rounded-lg'>
                        <h1>GitHub Actions</h1>
                    </div>
                </div>
            </div>
            <div className='px-7 pt-7 sm:px-9 sm:pt-9 lg:px-12 lg:pt-12 text-start font-sans'>
                <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl pb-8'>Education</h1>
                <div className='flex flex-col gap-4'>
                    <EducationCard logo={devLogo} title={'100xDevs'} description={'Full Stach Web Development, DevOps and Web3 Bootcamp'} duration={'2024-Present'} />
                    <EducationCard logo={AULogo} title={'Assam University, Silchar'} description={'Bachelor of Electronics & Communication Engineering'} duration={'2022-2026'} />
                </div>
            </div>
        </div>
    )
}

export default NewSkills