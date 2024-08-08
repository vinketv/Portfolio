"use client";

const RollingText = () => {
  const list = ["Frontend", "Backend"];
  const extendedList = [...list, list[0]];
  return (
    <div className="text-indigo-500 inline-flex flex-col overflow-hidden h-6 sm:h-8">
      {" "}
      {/* Adjust the height as needed */}
      <ul className="block animate-text-slide-2 text-left leading-tight [&_li]:block">
        {extendedList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RollingText;
