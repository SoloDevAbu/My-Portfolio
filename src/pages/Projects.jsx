import ProjectComponents from '../components/ProjectComponents'
import projectLogo1 from '../assets/projects/supply.png'
import projectLogo2 from '../assets/projects/letter-a.png'
import projectLogo3 from '../assets/projects/digital-learning.png'

const Projects = () => {
  return (
    <div className='pt-6 pl-5'>
        <ProjectComponents logo={projectLogo1} name={"InventEase"} purpose={"Purpose: A Inventory system designed to simplify inventory tracking and management for businesses."} features={"Features: Includes CRUD operations, real-time stock updates, and secure API endpoints for seamless data handling."} tech={"Tech Stack: Developed using Node.js, Express, React, and MongoDB for scalability and reliability."}/>
        <ProjectComponents logo={projectLogo2} name={"InstaCard"} purpose={"Purpose: Generate a png image based on the users instagram details."} features={"Features: Paste user instagram link and an image card will be generated showing all the user followers, following, post, liks etc."} tech={"Tech Stack: Developed using Node.js, Express, React, and MongoDB for scalability and reliability."}/>
        <ProjectComponents logo={projectLogo3} name={"E-Learning"} purpose={"Purpose: Users can Sell or Buy courses Online based on their interest."} features={"Features: Includes CRUD operations for users, teachers and courses."} tech={"Tech Stack: Developed using Node.js, Express, and MongoDB for scalability and reliability."}/>
    </div>
  )
}

export default Projects