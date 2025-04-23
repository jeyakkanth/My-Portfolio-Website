import websiteImage01 from '../Assets/ecommerce-websites.jpg'
import websiteImage02 from '../Assets/food-ecommerce.jpg'
import websiteImage03 from '../Assets/website-blog.jpg'


export default function Projects (){

    const config ={
    Projects : [
                    {
                        image : websiteImage01,
                        description : `A Ecommerce Website , Built with MERN Stack`,
                        link : ''
                    },
                    {
                        image : websiteImage02,
                        description : `Food Ecommerce Website like Swiggy , Built with Angular & .Net`,
                        link : ''
                    },
                    {
                        image : websiteImage03,
                        description : `Basic Blog Website Built with Next.js & MangoDB`,
                        link : ''
                    }
                ]
    }
   
    

    return (
        <section id='projects' className='flex flex-col py-20 px-5 justify-center bg-primary text-white'>
            <div className='w-full py-5'>
                <div className="flex-col justify-center px-10 py-5 ">
                    <h1 className='font-bold text-4xl border-b-4 mb-5 border-secondary w-[140px]'>Projects</h1>
                    <p>There are some of my best projects.
                        I have built these with React ,
                        MERN and Tailwind CSS. Check them out
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.Projects.map((projects)=>(
                        <div className='relative'> 
                            <img className='h-[200px] w-[400px]' src={projects.image}/>
                            <div className='projects-desc'>
                                <p className='text-center py-5 px-5 font-bold'>{projects.description}</p>
                                <div className="flex justify-center" >
                                    <a className="btn" target="_blank" href={projects.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                   
                </div>
            </div>
        </section>
    )
}