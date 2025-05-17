import AboutImg from '../Assets/about.png';
import { motion } from 'framer-motion';


export default function About(){
    const config = {
        line1 : ` Hi , I'm name is Jeyakkanth. I'm a Web Developer.
         I built beautiful Websites with 🚀 React.js and Tailwind CSS`,
        line2 : ` I am Proficient FrontEnd Skills likes React.js , 
          Tailwind CSS , HTML , CSS , Javascript & Next.js`,
        line3 : ` In Back-End I normaly know Node.js , Express.js , MangoDB `,
    }
    return (
        <section id="about" className= 'flex flex-col md:flex-row bg-secondary px-5'>
            <div className='md:w-1/2 py-5'>
                <img src={AboutImg}/>
            </div>
            < motion.div
             initial={{opacity : 0 , x : 100}}
             transition={{duration : 1.5}}
             whileInView={{opacity : 1 , x : 0}}
             viewport={{once : true}}
            className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl  font-bold mb-4'>About <span className='text-black text-4xl'>Me</span> </h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='mb-5'>{config.line3}</p>
                </div>
            </motion.div>
        </section>
    )
}