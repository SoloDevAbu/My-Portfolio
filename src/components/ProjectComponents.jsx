const ProjectComponents = ({ logo, name, purpose, features, tech }) => {
    return (
        <div className="px-4 pt-4 sm:px-6 lg:px-8 mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
            <div className="flex justify-start items-center gap-2">
                <img className="size-12" src={logo} alt={name} />
                <h1 className="text-blue-600 font-bold font-sans">{name}</h1>
            </div>
            <div className="text-gray-700 font-sans font-medium">
                <p>{purpose}</p>
                <p>{features}</p>
                <p>{tech}</p>
            </div>
        </div>
    )
}

export default ProjectComponents