import { frameworks, libraries, programmingLanguages } from "../components/Constants"
import SkillsComponent from "../components/SkillsComponent"

const Skills = () => {
  return (
    <div>
      <SkillsComponent title={"Programming Languages"} skills={programmingLanguages} />
      <SkillsComponent title={"Frameworks"} skills={frameworks} />
      <SkillsComponent title={"Libraries"} skills={libraries} />
      <div className="flex justify-center gap-6 font-sans font-semibold text-xl">
        <h1>cors</h1>
        <h1>node-cron</h1>
        <h1>bcrypt</h1>
      </div>
    </div>
  )
}

export default Skills