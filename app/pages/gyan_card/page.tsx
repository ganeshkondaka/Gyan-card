import Profile from "@/app/components/Profile";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Socials from "@/app/components/Socials";
import Work_exp from "@/app/components/Work_exp";
import Link from "next/link";
import { FaGithub, FaRegCheckCircle } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";

export default function page() {
    return (
        <div className="flex justify-center">
            <div className="flex  flex-col max-w-full md:max-w-[52%] border-2 border-zinc-800 m-3 px-4">
                {/* <h1 className="text-3xl">gyan card</h1> */}
                <Profile></Profile>
                <div className="w-full my-2">
                    <p className="text-2xl md:text-3xl font-bold">Projects</p>
                    <div className="text-gray-500 my-3"> All the projects that i have done.</div>
                    <Projects></Projects>
                </div>
                <div className="w-full my-2">
                    <p className="text-2xl md:text-3xl font-bold">Skills</p>
                    <div className="text-gray-500 my-3"> My skills are in</div>
                    <Skills></Skills>
                </div>
                {/* <div className="w-full my-2">
                    <p className="text-2xl md:text-3xl font-bold">Acheivements</p>
                    <div className="text-gray-500 my-3"> These are all my Acheivements</div>
                </div> */}
                <div className="w-full my-2">
                    <p className="text-2xl md:text-3xl font-bold">Work-Experience</p>
                    <div className="text-gray-500 my-3">My professional Experience as a intern</div>
                    <Work_exp />
                </div>
                <div className="w-full my-2">
                    <span className="text-2xl md:text-3xl font-bold inline">Kickoff </span>
                    <div className="text-gray-500 my-3">started contributing to opensource</div>
                    <div className='mt-4  p-4 border-2 border-zinc-800 rounded-lg '>
                        <p className='p-2 text-md'><FaGithub className='inline' /> Contributed to Spectrum-UI </p>
                        <div className='flex items-center px-4 gap-3 mt-2'>
                            <FaCodeMerge className='text-purple-800 text-xl ' />
                            <div className='flex flex-col text-zinc-400 text-sm hover:underline'>
                                <Link href="https://github.com/arihantcodes/spectrum-ui/pull/54">added a custom cursor component</Link>
                            </div>
                        </div>
                        <div className='flex items-center px-4 gap-3 mt-4'>
                            <FaRegCheckCircle className='text-purple-800 text-xl ' />
                            <div className='flex flex-col text-zinc-400 text-sm hover:underline'>
                                <Link href="https://github.com/arihantcodes/spectrum-ui/issues/38#event-15721056448">solved the cards overlapping</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <hr className="border border-zinc-800" />
                    <Socials></Socials>
                </div>
            </div>
        </div>
    )
}
