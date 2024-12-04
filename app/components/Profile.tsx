import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex  items-center justify-around py-3 pr-2">
        <div className="">
            <div className=" text-3xl md:text-5xl font-bold tracking-tight "> Kondaka Ganesh</div>
            <div className="text-gray-500 mt-2"> Through countless lines of code, my laptop has seen my raw passion</div>
            {/* <div>From concept to creation, coding websites is my greatest joy.</div> */}
        </div>
        <div className=""> 
            <Image 
            src="/dpblack.jpg" 
            alt="ganesh image"
            width={200}
            height={200}
            className=" object-cover rounded-full border-8 md:border-8 dark:border-zinc-800 border-zinc-900 hover:scale-110 transition-transform duration-300 " />
        </div>
    </div>
  )
}
