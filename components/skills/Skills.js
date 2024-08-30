"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
  }, []);

  const skills = [
    { name: "Base de donnees", logo: ["/mysql.webp", "/postgress.webp"] },
    {
      name: "Langages",
      logo: ["/html.webp", "/css.webp", "/js.webp", "/C.webp", "/python.webp"],
    },
    {
      name: "Frameworks",
      logo: ["/react.webp", "/nextjs.webp"],
    },
  ];
  return (
    <div className="flex py-20">
      <div className="flex flex-col gap-12 justify-center items-center align-middle w-full">
        <h3 className="text-black text-3xl font-bold">Mes Competences</h3>
        <div
          ref={skillsRef}
          className="flex flex-col sm:flex-row flex-co justify-center gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 text-center min-w-[20%] sm:min-w-[320px] w-auto mx-6 p-6 bg-white rounded-lg shadow-xl ${
                isVisible ? "animate-fadeUp" : ""
              }`}
            >
              <span className="w-1/5 text-lg text-black font-bold">
                {skill.name}
              </span>

              <div className="flex flex-row justify-center w-full p-4 gap-4">
                {skill.logo.map((item, index) => (
                  <Image
                    src={item}
                    key={index}
                    width={48}
                    height={48}
                    quality={100}
                    alt="Picture of the author"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
