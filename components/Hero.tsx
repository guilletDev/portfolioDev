import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";
import { title } from "process";


const Hero = () => {
  return (
    <div className=" pb-20 pt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]" />
            
        
        
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            

            <TextGenerateEffect 
            className="text-center text-5xl md:text-5xl lg:text-6xl"
            words="¡Hola! Soy Guillermo, Desarrollador Front-end"/>
            <h2 className="text-md text-center text-blue-100 text-lg ">
            
            </h2>
            <p className="text-white-200 md:text-lg my-5 text-center font-medium roboto">Analista de Sistemas y Desarrollador web, ayudo a que la tecnología sea más fácil de usar a través de sitios bien diseñados y optimizados </p>
            

            {/* <p className="text-center md:tracking-wider mb-4 mt-1 text-lg md:text-lg lg:text-2xl">
            Transforma tu idea en una Página Web
            </p> */}
            <a href="https://drive.google.com/uc?export=download&id=1UxvlvufoRyp1rvB4oM_Bp0JPGM_E-c17" download='GuilleCv'>
                <MagicButton title='Descargar Cv' icon={<FaLocationArrow />} position="right" />
            </a>

            <div className="flex items-center md:gap-3 gap-4 mt-5 md:mt-7">
                    {socialMedia.map((profile)=>(
                        <div key={profile.id} className="flex md:w-28 h-10 w-[113px] cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
                        rounded-lg border border-black-300">
                            <a target="blank" href={profile.link} className="flex gap-2 justify-center">
                                <img src={profile.img} alt='Iconos del footer' height={20} width={20} />
                                <h3>{profile.title}</h3>
                                
                            </a>
                            
                        </div>
                    ))}
                </div>
        </div>

        </div>

       

        <div>
        

      </div>
    </div>
  );
};

export default Hero;
