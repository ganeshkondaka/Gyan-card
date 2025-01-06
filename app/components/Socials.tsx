import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
    return (
        <div>
            <div className="mt-8 flex justify-center gap-8">
                
                <a href="https://x.com/ganesh_kondaka"> <FaXTwitter className="text-zinc-400 text-xl hover:text-2xl h-6 hover:text-green-600"></FaXTwitter> </a> 
                <a href="https://www.linkedin.com/in/kondaka-ganesh-b402bb252/"> <FaLinkedin className="text-zinc-400 text-xl hover:text-2xl h-6 hover:text-green-600"></FaLinkedin> </a> 
                <a href="https://github.com/ganeshkondaka"> <FaGithub className="text-zinc-400 text-xl hover:text-2xl h-6 hover:text-green-600"></FaGithub> </a> 
                <a href="mailto:ganeshjo306.com"> <FaEnvelope className="text-zinc-400 text-xl hover:text-2xl h-6 hover:text-green-600"></FaEnvelope> </a> 
            </div>
            <p className="text-green-800 text-center  mt-8">© 2025 Ganesh. All rights reserved.</p>
            <p className="text-slate-400 text-center mb-5 mt-2">Made with ❤️ By  Ganesh</p>

        </div>
    )
}
