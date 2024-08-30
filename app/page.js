import Timeline from "@/components/Timeline";
import { Headers } from "@/components/headers/header";
import { Project } from "@/components/project/Project";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-600 opacity-20 blur-[100px]"></div>
        </div>
      </div>
      <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <Headers />
        <Timeline />
        <Skills />
        <Project />
      </div>
      <div>{/* Footer */}</div>
    </>
  );
}
