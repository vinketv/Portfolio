const timelineData = [
  {
    title: "Développeur Autodidacte",
    date: "2019 - Aujourd'hui",
    description:
      "Le Covid-19 m'a permis de me plonger dans l'apprentissage du code en autodidacte.",
  },
  {
    title: "42 Student Paris",
    date: "Mai 2024 - Aujourd'hui",
    description:
      "Je suis actuellement mon cursus à l'école 42 sur le campus de Paris",
  },
];

const Timeline = () => {
  return (
    <div className="flex py-20">
      <div className="flex justify-center items-center align-middle w-full">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-80 h-full mx-6 p-6 bg-white rounded-lg shadow-xl animate-fadeUp"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <time className="block text-sm font-normal leading-none text-gray-500">
              {item.date}
            </time>
            <p className="mt-2 text-base font-normal text-gray-600">
              {item.description}
            </p>
            {index < timelineData.length - 1 && (
              <span className="absolute top-1/2 right-0 w-8 h-8 transform translate-x-1/2 -translate-y-1/2 bg-indigo-500 rounded-full"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
