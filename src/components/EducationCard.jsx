const EducationCard = ({logo, title, description, duration}) => {
  return (
    <div className='flex justify-between bg-neutral-950 rounded-xl px-6 py-5 md:px-7 md:py-6 border border-neutral-500'>
      <img src={logo} alt="Icon" className="size-10 rounded-full sm:size-12 md:size-14"/>
      <div className="flex flex-col px-4 sm:px-6">
        <h1 className="font-sans font-semibold text-base md:text-lg">{title}</h1>
        <p className="text-xs md:text-sm text-neutral-400">{description}</p>
      </div>
      <p className="text-xs md:text-sm text-neutral-400">{duration}</p>
    </div>
  )
}

export default EducationCard