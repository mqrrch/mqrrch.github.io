export default function HeroPage(){
    return (
        <section id='hero' className=''>
            <div id='hero-title' className='text-[#f8f8f8]'>
                <p className='text-xl'>Hi, my name is</p>
                <p className='text-[40px] leading-12'>Marchel</p>
                <p className='text-lg tracking-wide mt-1'>JR. FRONTEND DEVELOPER</p>
            </div>

            <div id='hero-text' className='mt-3'>
                <p className='text-[14px] text-gray-300 max-w-[400px]'>
                    I create websites with Javascript and React. I am also learning more about Typescript.
                </p>
            </div>

            <div id='hero-links' className='mt-4 flex gap-2 text-gray-300'>
                <a 
                    href="https://github.com/mqrrch"
                    target="_blank"
                    className='bx bxl-github text-4xl hover:text-[#f8f8f8] transition-colors duration-300 cursor-pointer'
                ></a>
            </div>
      </section>
    )
}