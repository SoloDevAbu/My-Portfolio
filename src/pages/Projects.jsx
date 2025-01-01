import ProjectComponents from '../components/ProjectComponents'
import projectLogo1 from '../assets/projects/supply.png'
import projectLogo2 from '../assets/projects/letter-a.png'
import projectLogo3 from '../assets/projects/digital-learning.png'

const Projects = () => {
  return (
    <div className='pt-6 pl-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <ProjectComponents logo={projectLogo1} name={"InventEase"} description={"This is an inventory management platform to manage all of you inventories"} techs={['React', 'NodeJS',"TailwindCSS", 'MongoDB']} website={'https://invent-ease.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/InventEase'}/>
        <ProjectComponents logo={projectLogo2} name={"DevCard"} description={"Generates c card base on the users LeetCode link, like the number of questions solved, acceptance rate, queastion solved in each level like easy, medium and hard. "} techs={['React', 'NodeJS', "TailwindCss"]} website={'https://profile-card-generator-eight.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/Profile-Card-Generator'}/>
        <ProjectComponents logo={projectLogo3} name={"Snippet Shop"} description={"Online market place for buy and sell sodr snippets. Anyone can upload code snippet along with language selected, modify it or delete it. Users can buy Code snippets according to their need and download it and download it in zip format"} techs={['React', 'NodeJS','TailwindCSS', 'MongoDB']} website={'https://snippet-shop.vercel.app/'} githubLink={''}/>
        <ProjectComponents logo={"VirtualR"} name={"VirtualR"} description={"An AI platform Landing page with staning UI and Graphics, fully responsive and user Interactive UI"} techs={['React', 'NodeJS', 'TailwindCSS']} website={'https://virtual-r-taupe.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/VirtualR'}/>
    </div>
  )
}

export default Projects