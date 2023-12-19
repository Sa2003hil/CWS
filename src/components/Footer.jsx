import { Typography } from "@material-tailwind/react";
import { instagram, linkedin, github } from "../assets";

export default function Footer() {
    return (
        <footer className="w-full bg-black p-8">
            <div data-aos="fade-up">
                <Typography color="blue-gray" className="text-center font-normal">
                    &copy; Copyright © 2023 <span className="bg-black" style={{ color: "#3684ca" }}>CodeWithSahil.com</span>
                </Typography>
            </div>
            <hr className="mt-2 mb-2 w-[0%] m-auto" style={{ color: "#3684ca", backgroundColor: "#3684ca" }} />
            <div className="flex items-center justify-center m-auto gap-2" data-aos="fade-up">
                <a href="https://www.linkedin.com/in/sahil-~-b85926203/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} className="w-10 h-10" alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/_s_a_h_i._l_/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} className="w-8 h-8" alt="Instagram" />
                </a>
                <a href="https://www.github.com/sa2003hil/" target="_blank" rel="noopener noreferrer">
                    <img src={github} className="w-8 h-8" alt="Instagram" />
                </a>
            </div>

        </footer>
    );
}