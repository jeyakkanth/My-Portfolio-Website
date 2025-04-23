import HeroImg from '../Assets/hero.png';
import { AiOutlineLinkedin , AiOutlineGithub , AiOutlineYoutube } from "react-icons/ai";

export default function Hero(){
    const config = {
        subtitle : 'I am a React Developer',
        social : {
            Linkedin : 'https://www.linkedin.com/in/jeyakkanth-jegathees/',
            Github : 'https://github.com/jeyakkanth',
            Youtube : 'https://www.youtube.com/@ShadowCode_17'
        }
    }
    return (
        <section  className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' >
           <div className='md:w-1/2 flex flex-col'>
                <h1 className=' text-white text-6xl font-hero-font'>Hi ,<br/> Iam <span className='text-black'>Jey</span> Jeyakkanth
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    {/* <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a> */}
                    <a href={config.social.Linkedin} target="_blank" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                    <a href={config.social.Github} target="_blank" className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                    <a href={config.social.Youtube} target="_blank" className='pr-5 hover:text-white'><AiOutlineYoutube size={40}/></a>
                </div>
           </div>
            <img  src={HeroImg} className='md:w-1/3'/>
        </section>
    )
} 