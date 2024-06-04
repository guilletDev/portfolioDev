import {projects} from '@/data'
import { PinContainer } from './ui/3d-pin'

const RecentProyects = () => {
  return (
    <section className=" pt-20 pb-32 ">
        <h1 className="heading">Proyectos <span className="text-purple">Recientes</span> </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({id, title, des, img, iconLists, link})=>(
                <div key={id} className='lg:min-h-[35.5rem] h-[25rem] flex items-center justify-center sm:w-98 w-[80vw]'>
                    <PinContainer title={title} href={link}>
                      <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]'>
                        <div>
                          <img src="/bg.png" alt="bg-img" />
                        </div>
                        <img className='z-10 absolute bottom-0' src={img} alt={title} />
                      </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </section>
  )
}

export default RecentProyects