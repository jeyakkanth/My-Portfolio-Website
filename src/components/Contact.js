
import { motion } from "framer-motion"

export default function Contact(){
    const config = {
        Email : 'jeyakkanth2001@gmail.com',
        Phone : '0740736772'
    }
    return (
        <section id="contact" className='flex flex-col bg-primary px-5 py-32  text-white'>
            <motion.div 
                 initial={{opacity : 0 , y : 100}}
                 transition={{duration : 1.5}}
                 whileInView={{opacity : 1 , y : 0}}
                 viewport={{once : true}}
            className='flex flex-col items-center'>
                <h1 className='text-4xl  font-bold '>Con<span className='text-black text-4xl'>tact</span></h1>
                <p className='py-5 '>If you want to discuss more in detail , please contact me..!</p>
                <p className='py-2'><span className='font-bold'>Email : </span>{config.Email}</p>
                <p className='py-2'><span className='font-bold'>Phone : </span>{config.Phone}</p>
            </motion.div>
        </section>
    )
}