import { Github, Mail } from "lucide-react";
import Image from "next/image";
import RollingText from "../effect/roll";

export const Headers = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-around align-middle items-center mx-auto max-w-4xl py-28 sm:py-48 lg:py-24 gap-5">
      <div className="animate-fadeRight">
        <Image
          className="rounded-full"
          src="/profil_picture.jpg"
          width={360}
          height={360}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col gap-6 text-center items-center px-4 font-bold tracking-tight text-black w-full animate-fadeLeft">
        <div className="flex flex-col gap-2">
          <h3>Hello, moi c'est</h3>
          <h1 className="text-4xl sm:text-5xl">Kevin Sanches</h1>
        </div>
        <h2 className="text-2xl sm:text-3xl">
          Developpeur <RollingText list={["Frontend", "Backend"]} />
        </h2>
        <div className="flex flex-row gap-4 text-black">
          <a
            href="https://github.com/vinketv"
            target="_blank"
            title="lien ver github"
          >
            <Github />
          </a>
          <a
            href="mailto:kevin.sanches.business@gmail.com"
            title="lien envois email"
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
};
