import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"


export const Footer = ()=> {
    return (
        <footer id="contact" className="w-full pt-20 pb-10 ">
            <div className="w-full absolute left-0 -bottom-72">
                <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[50vw]">Listo para llevar tu <span className="text-purple">prescencia</span> digital al siguiente nivel?</h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Comuníquese conmigo y analicemos cómo puedo ayudarle a alcanzar sus objetivos </p>
                <a href="mailto:guilletdev@gmail.com">
                    <MagicButton title="Contáctame" icon={<FaLocationArrow/>} position="right"/>
                </a>
            </div>

            <div className="flex items-center justify-between">
                <p> Copyright © 2024 guilletdev</p>
            </div>
        </footer>
    )
}