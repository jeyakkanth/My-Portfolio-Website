import ResumeImg from '../Assets/resume.jpg';
import { motion } from 'framer-motion';


export default function Resume(){
    const config = {
        link : 'https://drive.google.com/file/d/1LpsvhLnbn3fCoiLBnLhnilXaxG0IHLSz/view?usp=drive_link'
    }
    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-10'>
            <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
                <img className='w-[300px]' src={ResumeImg}/>
            </div>
            <motion.div
                 initial={{opacity : 0 , x : 100}}
                 transition={{duration : 1.5}}
                 whileInView={{opacity : 1 , x : 0}}
                 viewport={{once : true}}
            className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl  font-bold '>Resu<span className='text-black text-4xl'>me</span></h1>
                    <p className='py-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
                </div>
            </motion.div>
        </section>
    )
}