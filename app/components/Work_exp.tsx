import { Briefcase, Handshake } from "lucide-react";

export default function Work_exp() {
  return (
    <div>
      <div className="flex items-center max-h-auto p-2 border-2 border-zinc-800 rounded-md mt-5">
        <div className="  p-2">
          <Handshake color="#cc9c00" />
        </div>
        <div className="p-2">
          <div className="text-zinc-300">Freelancer</div>
          <div className="text-zinc-500">Full Stack Developer</div>
          <div className="text-zinc-600">Present</div>
        </div>
      </div>

      <div className="flex items-center max-h-auto p-2 border-2 border-zinc-800 rounded-md mt-5">
        <div className="  p-2">
          <Briefcase color="#b000cc" />
        </div>
        <div className="p-2">
          <div className="text-zinc-300">SmartBridge PVT LTD</div>
          <div className="text-zinc-500">AI/ML Intern</div>
          <div className="text-zinc-600">2023-Nov 2024-Apr</div>
        </div>
      </div>

    </div>
  )
}
