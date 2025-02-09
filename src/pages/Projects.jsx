import ProjectComponents from '../components/ProjectComponents'
import projectLogo1 from '../assets/projects/supply.png'
import projectLogo2 from '../assets/projects/letter-a.png'
import projectLogo3 from '../assets/projects/digital-learning.png'
import projectLogo4 from '../assets/projects/BG.png'

const Projects = () => {
  return (
    <div className='pt-6 pl-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <ProjectComponents logo={projectLogo4} name={"YouCollab"} description={"YouCollab is a collaboration platform for YouTubers and Editors, streamlining the video editing and publishing process. YouTubers can invite editors, review uploaded videos, and publish directly to YouTube with automated workflows. The platform integrates AWS S3 for video storage, YouTube API for direct uploads, and email notifications for seamless communication."} techs={['React', 'NodeJS', "TailwindCss", "MongoDB", "Express", "AWS", " YouTube Data API"]} website={'https://you-collab.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/YouCollab'}/>
        <ProjectComponents logo={projectLogo4} name={"Blog Genie"} description={"A blogging platform where the backend fetch the top news every hour from news API with the help of cron jobs and the blog is posted on the website with the title, image and summary. On clicking the Read Full Articled full areticle appears"} techs={['React', 'NodeJS', "TailwindCss", "MongoDB", "Express"]} website={'https://blog-genie-sigma.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/BlogGenie'}/>
        <ProjectComponents logo={projectLogo2} name={"DevCard"} description={"Generates a card base on the users LeetCode username, like total questions solved, queastion solved in each level easy, medium and hard, Skills, Rank, Reputation"} techs={['React', 'NodeJS', "TailwindCss", "MongoDB", "Express"]} website={'https://profile-card-generator-eight.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/Profile-Card-Generator'}/>
        <ProjectComponents logo={projectLogo2} name={"Emoji Story Teller"} description={"Generates random story based on the input Emojis. This project uses Hugging Face's AI API to generate the sotry"} techs={['React', "TailwindCss", "AI API"]} website={'https://emoji-story-telling.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/emoji-story-telling'}/>
        <ProjectComponents logo={projectLogo1} name={"InventEase"} description={"This is an inventory management platform to manage all of you inventories"} techs={['React', 'NodeJS',"TailwindCSS", 'MongoDB', 'Express']} website={'https://invent-ease.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/InventEase'}/>
        <ProjectComponents logo={projectLogo3} name={"Snippet Shop"} description={"Online market place for buy and sell sodr snippets. Anyone can upload code snippet along with language selected, modify it or delete it. Users can buy Code snippets according to their need and download it and download it in zip format"} techs={['React', 'NodeJS','TailwindCSS', 'MongoDB']} website={'https://snippet-shop.vercel.app/'} githubLink={''}/>
        <ProjectComponents logo={"VirtualR"} name={"VirtualR"} description={"An AI platform Landing page with staning UI and Graphics, fully responsive and user Interactive UI"} techs={['React', 'NodeJS', 'TailwindCSS', 'Express']} website={'https://virtual-r-taupe.vercel.app/'} githubLink={'https://github.com/SoloDevAbu/VirtualR'}/>
    </div>
  )
}

export default Projects