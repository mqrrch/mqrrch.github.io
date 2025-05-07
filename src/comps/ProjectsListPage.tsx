import DOMPurify from 'dompurify';

const projects = [
    {
        name: 'Expense Tracker',
        img: '/Expense-Tracker.png',
        alt: 'Expense Tracker Image',
        text: `A responsive web app for managing personal finances with user authentication. Features interactive charts and expense categorization.`,
        tools: ['Typescript', 'Tailwind', 'React', 'Firebase', 'Redux'],
        webLink: 'https://mqrrch.github.io/Expense-Tracker',
        ghLink: 'https://github.com/mqrrch/Expense-Tracker'
    },
    {
        name: 'E-Commerce Store',
        img: '/E-Commerce-Store.png',
        alt:'E-Commerce Store Image',
        text: `An online marketplace with product search and filtering, cart management, wishlist management and also an user authentication. Made with <a class='font-semibold text-[#f8f8f8]' target="_blank" href='https://fakestoreapi.com/'>FakestoreAPI</a>.`,
        tools: ['Javascript', 'Tailwind', 'React', 'Firebase', 'Redux'],
        webLink: 'https://mqrrch.github.io/E-Commerce-Store',
        ghLink: 'https://github.com/mqrrch/E-Commerce-Store'
    },
    {
        name: 'Weather App',
        img: '/Weather-App.png',
        alt:'Weather App Image',
        text: `A real-time weather application that checks the weather in every city in the world. Features a city search, weather condition, wind speed and direction, UV index, humidity percentage, and astrology. Powered with <a class='font-semibold text-[#f8f8f8]' target="_blank" href='https://www.weatherapi.com/'>WeatherAPI</a>.`,
        tools: ['Javascript', 'Tailwind', 'React'],
        webLink: 'https://mqrrch.github.io/Weather-App',
        ghLink: 'https://github.com/mqrrch/Weather-App'
    },
]

export default function ProjectsListPage(){

    return (
        <section id="projects" className="">
            <p className="text-[22px] text-[#f8f8f8] font-semibold">Projects</p>
            <div className="flex flex-col gap-12 mt-4">
                {projects.map((project, index) => (
                    <div key={index} className="">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-[#f8f8f8]">{project.name.toUpperCase()}</p>
                            <div className="flex text-lg items-center gap-4">
                                <a target="_blank" href={project.ghLink} title="View source code" className='fa-brands fa-github text-gray-400 hover:text-[#f8f8f8] transition-colors duration-300'></a>
                                <a target="_blank" href={project.webLink} title="View website" className='fa-solid fa-globe text-gray-400 hover:text-[#f8f8f8] transition-colors duration-300'></a>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4 sm:mt-3">
                            <div className="">
                                <p 
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.text) }}
                                    className='text-gray-300'
                                ></p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.tools.map((tool, index) => (
                                        <div 
                                            key={index}
                                            className="bg-[rgba(51,116,24,0.3)] border-2 border-[rgba(93,214,44,0.6)] rounded-lg text-[#f8f8f8] text-sm"
                                        >
                                            <p className="px-1.5 py-0.5">{tool}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-40 h-30 sm:order-first sm:w-full sm:max-w-[140px] border-2 border-[#4a4a4a] rounded mt-3 sm:mt-0 overflow-hidden">
                                <img src={project.img} className="w-full h-auto rounded"></img>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}