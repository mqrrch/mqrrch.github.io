import './App.css'
import ContactPage from './comps/ContactPage'
import HeroPage from './comps/HeroPage'
import ProjectsListPage from './comps/ProjectsListPage'

export default function App() {

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[-2] bg-[#0f0f0f]"></div>
      <div id='container' className='my-12 w-[85%] max-w-[1000px] mx-auto flex flex-col gap-16'>
        <HeroPage />
        <div className='w-full h-0.5 bg-radial from-[#202020] to-[#0f0f0f]'></div>
        <ProjectsListPage />
        <div className='w-full h-0.5 bg-radial from-[#202020] to-[#0f0f0f]'></div>
        <ContactPage />
      </div>
    </>
  )
}