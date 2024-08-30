"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Feedcord",
    img: "/feedcord.webp",
    link: "https://feedcord.com/",
    stack: ["/next-js.webp"],
    description:
      "Feedcord est une application innovante pour les utilisateurs de Discord, permettant de sauvegarder et envoyer des messages en un clic sur plusieurs canaux. Que vous soyez revendeur de sneakers, de cartes ou de collectibles, Feedcord simplifie la gestion de vos messages.",
  },
  {
    title: "Convert Label",
    img: "/convertlabel.webp",
    link: "https://chromewebstore.google.com/detail/convert-label/kojlkoompagohabokhpanhcjannalmbh?authuser=0&hl=fr",
    stack: ["/html.webp", "/css.webp", "/js.webp"],
    description:
      "Transformez facilement les bordereaux d'envoi au format 4x6 pour les adapter à votre imprimante thermique à étiquette autocollante avec notre extension Chrome. Fini les tracas de mise en page manuelle ou d'ajustement laborieux : notre outil intuitif vous permet de convertir rapidement et efficacement vos bordereaux d'envoi au format optimal pour une impression nette et précise sur des étiquettes autocollantes de 4x6 pouces.",
  },
];

export const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

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
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
  }, []);
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-around align-middle items-center mx-auto max-w-4xl pt-28 sm:pt-48 lg:pt-24 gap-5">
        <h3 className="text-black text-3xl font-bold">Mes Projets</h3>
      </div>
      <div
        ref={projectRef}
        className="flex flex-col justify-around align-middle items-center mx-auto py-28 sm:py-48 lg:py-24 gap-12"
      >
        {projects.map((item, index) => (
          <div
            className="flex flex-row align-middle items-center justify-center gap-4 w-full" // Ajoutez `w-full` ici pour que chaque ligne prenne toute la largeur du conteneur parent
            key={index}
          >
            <div
              className={`relative flex-shrink-0 w-full sm:w-4/5 h-full mx-6 p-6 bg-white rounded-lg shadow-xl ${
                isVisible ? "animate-fadeUp" : null
              }`}
            >
              <div className="flex flex-row w-full align-middle justify-center items-center gap-4">
                <Image
                  src={item.img}
                  width={64}
                  height={64}
                  quality={100}
                  alt="Picture of the author"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    <Link target="_blank" href={item.link}>
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="flex align-middle justify-center items-center p-6">
                <p className="mt-2 text-base text-center font-normal text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
