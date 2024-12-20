import {projects} from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import '../public/git.svg'

const RecentProyects = () => {
  return (
    <section id='projects' className=" py-20   ">
        <h1 className="heading">Proyectos <span className="text-purple">Recientes</span> </h1>
       {/*  <p className='text-white-200 md:mt-10 my-5 text-center'>Estos son algunos proyectos hecho con cariño</p> */}
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({id, title, des, img, iconLists, link, linkGit})=>(
                <div key={id} className=' sm:h-[41rem] h-[32rem] lg:min-h-[35.5rem]  flex items-center justify-center sm:w-98 w-[80vw]'>
                    <PinContainer title={title} href={link}>
                      <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]
                       mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                          <img src="/bg.png" alt="bg-img" />
                        </div>
                        <img className='z-10 absolute bottom-0' src={img} alt={title} />
                      </div>
                      <h1 className='font-bold lg:text-2xl
                      md:text-xl text-base line-clamp-1'>
                        {title}
                      </h1>
                      <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                        {des}
                      </p>
                      <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                            {iconLists.map((icon, index)=>(
                                <div key={icon} className='border border-white/[0.2] rounded-full 
                                bg-black lg:w-10 lg:h-10 w-9 h-9 flex justify-center items-center' 
                                /* style={{transform: `translateX(-${5 * index * 2}px)`}} */>
                                    <img src={icon} alt={icon} className='p-2' />
                                </div>
                            ))} 
                        </div>
                        <div className='flex items-center' >
                          <a target='blank' href={linkGit} className='mr-4'>
                              <img src="./git.svg" alt="logo github" className='w-7 h-9 md:w-8 md:h-10' />
                          </a>
                          <a target='blank' href={link} className='flex items-center'>
                            <p className='flex flex-col lg:text-xl md:text-xs text-sm text-purple'>Ver Demo</p>
                            <FaLocationArrow className='ms-2' color= '#CBACF9' />
                          
                          </a>
                            
                        </div>
                      </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </section>
  )
}

export default RecentProyects