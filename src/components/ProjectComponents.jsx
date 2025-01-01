import githubLogo from '../assets/github.png'
import webLogo from '../assets/web.png'

const ProjectComponents = ({ logo, name, description, techs = [], website, githubLink }) => {
    const previewImage = `https://api.microlink.io/?url=${encodeURIComponent(
        website
    )}&screenshot=true&embed=screenshot.url`;
    return (
        // <div className="px-4 pt-4 sm:px-6 lg:px-8 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
        //     <div className="flex justify-start items-center gap-2">
        //         <img className="size-12" src={logo} alt={name} />
        //         <h1 className="text-blue-600 font-bold font-sans">{name}</h1>
        //     </div>
        //     <div className="text-gray-700 font-sans font-medium">
        //         <p>{purpose}</p>
        //         <p>{features}</p>
        //         <p>{tech}</p>
        //     </div>
        // </div>
        <div className="flex flex-col bg-neutral-950 rounded-xl p-6 justify-between">
            <div className="flex justify-center border border-gray-500">
                {website ? (
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        <div className="relative w-full max-w-md">
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={previewImage}
                                    alt={`${name} preview`}
                                    className="rounded-lg w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </a>
                ) : (
                    <img src={logo} alt={name} className="container mx-auto" />
                )}
            </div>

            <div className='py-3'>
                <h1 className="font-semibold text-2xl">{name}</h1>
                <p className="text-base text-gray-400 py-3">{description}</p>
            </div>
            <div>
                <div className="flex flex-wrap gap-3">
                    {techs.map((tech, index) => (
                        <span key={index} className=" bg-neutral-700 text-white rounded-lg px-3 py-1 text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center pt-2">
                <div className="flex bg-neutral-300 text-black font-semibold rounded-lg px-2 py-1 items-center">
                    <img src={webLogo} alt="" className='size-6 p-1 rounded-full' />
                    <button onClick={() => window.open(website, '_blank')}>Website</button>
                </div>
                <div className="flex bg-neutral-300 text-black font-semibold rounded-lg px-2 py-1 items-center">
                    <img src={githubLogo} alt="" className='size-6 p-1 rounded-full' />
                    <button onClick={() => window.open(githubLink, '_blank')}>GitHub</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponents