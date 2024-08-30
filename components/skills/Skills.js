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

    return () => {
      if (skillsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const skills = [
    { name: "Base de données", logo: ["/mysql.webp", "/postgress.webp"] },
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
        <h3 className="text-black text-3xl font-bold">Mes Compétences</h3>
        <div
          ref={skillsRef}
          className="flex flex-col lg:flex-row justify-center gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 text-center min-w-[20%] sm:min-w-[320px] w-auto mx-6 p-6 bg-white rounded-lg shadow-xl ${
                isVisible ? "animate-fadeUp" : ""
              }`}
            >
              <span className="block text-lg text-black font-bold mb-4">
                {skill.name}
              </span>

              <div className="flex flex-row justify-center w-full p-4 gap-4 flex-wrap">
                {skill.logo.map((item, index) => (
                  <div
                    key={index}
                    className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  >
                    <Image
                      src={item}
                      alt={`${skill.name} logo ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                      quality={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
