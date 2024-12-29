const SkillsComponent = ({title, skills}) => {
  return (
    <div className="flex flex-col items-center pt-4 px-8">
      <h2 className="font-bold font-sans text-base sm:text-lg md:text-xl m-5">{title}</h2>
      <div className="bg-neutral-500 rounded-xl flex flex-row m-2 px-2 sm:px-4 py-2">
        {skills.map((skill, index) => (
          <div key={index} className=" rounded-full flex flex-row items-center hover:scale-125 transition duration-500">
            <img src={skill.icon} alt={`Skill ${index}`} className="size-12 m-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsComponent