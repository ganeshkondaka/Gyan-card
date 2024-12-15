import Profile from "@/app/components/Profile";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Socials from "@/app/components/Socials";
import Work_exp from "@/app/components/Work_exp";

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
                <div className="mt-8">
                    <hr className=" border-zinc-800" />
                    <Socials></Socials>
                </div>
            </div>
        </div>
    )
}
