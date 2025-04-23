import AboutImg from '../Assets/about.png';


export default function About(){
    const config = {
        line1 : ` Hi , My name is Jeyakkanth. I am a Front-End Developer(React.js). </br> I built beautiful Websites with 🚀 React.js and Tailwind CSS`,
        line2 : ` I am Proficient FrontEnd Skills likes React.js , </br>  Tailwind CSS , HTML , CSS , Javascript & Next.js`,
        line3 : ` In Back-End I normaly know Node.js , Express.js , MangoDB `
    }
    return (
        <section id="about" className= 'flex flex-col md:flex-row bg-secondary px-5'>
            <div className='md:w-1/2 py-5'>
                <img src={AboutImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl  font-bold border-b-4 border-primary w-[170px] mb-4'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='mb-5'>{config.line3}</p>
                </div>
            </div>
        </section>
    )
}