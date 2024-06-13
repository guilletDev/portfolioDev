import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data"
import { div } from "three/examples/jsm/nodes/Nodes.js"


export const Footer = ()=> {
    return (
        <footer id="contact" className="w-full pb-10 mb-[100px] md:mb-5 ">
           
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[50vw]">Listo para llevar tu <span className="text-purple">prescencia</span> digital al siguiente nivel?</h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Comuníquese conmigo y analicemos cómo puedo ayudarle a alcanzar sus objetivos </p>
                <a href="mailto:guilletdev@gmail.com">
                    <MagicButton title="Contáctame" icon={<FaLocationArrow/>} position="right"/>
                </a>
            </div>

            <div className="flex items-center justify-between mt-16 md:flex-row flex-col">
                <p className="text-sm md:text-base md:font-normal font-light">
                     Copyright © 2024 guilletdev
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile)=>(
                        <div key={profile.id} className="flex w-10 h-10 cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
                        rounded-lg border border-black-300">
                            <img src={profile.img} alt={profile.id} height={20} width={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}