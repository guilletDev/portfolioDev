import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import { gridItems } from "@/data"


const Grid = () => {
  return (
    <section className=" pb-20 lg:py-28" id= 'about' >
     {/*  <h1 className=" heading text-2xl text-center mt-8 lg:mb-14 lg:text-5xl lg:mt-0">Sobre <span className="text-purple">mi</span> </h1> */}
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg})=>(
          <BentoGridItem
           id = {id} key={id} title={title} description={description} className={className} img= {img}
           imgClassName={imgClassName} titleClassName ={titleClassName} spareImg={spareImg}
           />
        ))
        }
      </BentoGrid>
    </section>
  )
}

export default Grid