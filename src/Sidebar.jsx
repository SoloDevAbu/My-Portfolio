import githubLogo from '../src/assets/github.png'
import linkdinLogo from '../src/assets/linkedin.png'
import xLogo from '../src/assets/twitter (2).png'
import threadsLogo from '../src/assets/threads.png'

const Sidebar = () => {
    return (
        <div className='grid place-content-center h-screen fixed'>
            <div className="grid place-content-center">
                <div className=" py-8 px-8 m-2 flex flex-col gap-5 bg-color-sidebarContainer rounded-xl">
                    <div className="bg-color-btn rounded-3xl text-white font-semibold font-sans text-center sm:text-xs md:text-sm lg:text-lg xl:text-xl hover:bg-color-btnHover">
                        <button className="py-2 px-2 uppercase">about</button>
                    </div>
                    <div className="bg-color-btn rounded-3xl text-white font-semibold font-sans text-center sm:text-xs md:text-sm lg:text-lg xl:text-xl hover:bg-color-btnHover">
                        <button className="py-2 px-2 uppercase">projects</button>
                    </div>
                    <div className="bg-color-btn rounded-3xl text-white font-semibold font-sans text-center sm:text-xs md:text-sm lg:text-lg xl:text-xl hover:bg-color-btnHover">
                        <button className="py-2 px-2 uppercase">skills</button>
                    </div>
                    <div className="bg-color-btn rounded-3xl text-white font-semibold font-sans text-center sm:text-xs md:text-sm lg:text-lg xl:text-xl hover:bg-color-btnHover">
                        <button className="py-2 px-2 uppercase">contact me</button>
                    </div>
                </div>
            </div>

            <footer className='fixe flex justify-center pt-6'>
                <div className=" grid grid-cols-4 size-32 gap-2">
                    <a href="https://github.com/SoloDevAbu" target='_blank'>
                        <img src={githubLogo} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/abu-bakkar-siddique-546112205/" target='_blank'>
                        <img src={linkdinLogo} alt="Linkdin" />
                    </a>
                    <a href="https://x.com/AbuBakkar2502" target='_blank'>
                        <img src={xLogo} alt="X" />
                    </a>
                    <a href="https://www.threads.net/@devabu2502" target='_blank'>
                        <img src={threadsLogo} alt="Threads" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Sidebar