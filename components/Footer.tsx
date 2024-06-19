import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data"


export const Footer = ()=> {
    return (
        <footer id="contact" className="w-full pb-10 mb-[60px] md:mb-5 ">
           
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[50vw]">¿Listo para llevar tu <span className="text-purple">presencia</span> digital al siguiente nivel?</h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Comunicate conmigo y analicemos cómo puedo ayudarte a alcanzar tus objetivos </p>
                <a href="mailto:guilletdev@gmail.com">
                    <MagicButton title="Contáctame" icon={<FaLocationArrow/>} position="right"/>
                </a>
            </div>

            <div className="flex items-center justify-between mt-16 md:flex-row flex-col">
                <p className="text-sm md:text-base md:font-normal font-light">
                     Copyright © 2024 guilletdev
                </p>
                <div className="flex items-center md:gap-4 gap-4 mt-5 md:mt-0">
                    {socialMedia.map((profile)=>(
                        <div key={profile.id} className="flex w-10 h-10 cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
                        rounded-lg border border-black-300">
                            <a target="blank" href={profile.link}>
                                <img src={profile.img} alt='Iconos del footer' height={20} width={20} />
                            </a>
                            
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}