import { motion } from 'framer-motion';
import HeroImg from '../Assets/hero.jpg';
import { AiOutlineLinkedin , AiOutlineGithub , AiOutlineYoutube } from "react-icons/ai";

export default function Hero(){
    const config = {
        subtitle : 'I am a Front-End Developer',
        social : {
            Linkedin : 'https://www.linkedin.com/in/jeyakkanth-jegathees/',
            Github : 'https://github.com/jeyakkanth',
            Youtube : 'https://www.youtube.com/@ShadowCode_17'
        }
    }
    return (
        <section
         className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' >
           <motion.div
            initial={{opacity : 0 , x : -100}}
            transition={{duration : 1.5}}
            whileInView={{opacity : 1 , x : 0}}
            viewport={{once : true}}
            className='md:w-1/2 flex flex-col px-10'>
                <h1 className=' text-white md:text-8xl font-hero-font text-6xl '>
                    Hi ,<br/> Iam <span className='text-black'>Jey</span> Jeyakkanth
                    <p className='text-4xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    {/* <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a> */}
                    <a href={config.social.Linkedin} target="_blank" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                    <a href={config.social.Github} target="_blank" className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                    <a href={config.social.Youtube} target="_blank" className='pr-5 hover:text-white'><AiOutlineYoutube size={40}/></a>
                </div>
           </motion.div>
            <img  src={HeroImg} alt='profile' className='md:w-1/3 profile-image '/>
        </section>
    )
} 