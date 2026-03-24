import React, { useEffect, useState } from "react";
import { useRef } from "react";

import Img from "../../images/feedback.png";

const feedbacks = [
  {
    name: "Carlos Andrews",
    role: "Marketing Specialist",
    text: "“ZipRecruiter helped me find a job that truly matches my skills in less than two weeks.”",
    avatar: Img,
  },

  {
    name: "Carlos Andrews",
    role: "Software Developer",
    text: "“ZipRecruiter helped me find a job that truly matches my skills in less than two weeks.”",
    avatar: Img,
  },

  {
    name: "Carlos Andrews",
    role: "Product Manager",
    text: "“ZipRecruiter helped me find a job that truly matches my skills in less than two weeks.”",
    avatar: Img,
  },
];

const Feedbacks = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const total = feedbacks.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".card");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 32;
    const moveX = index * (cardWidth + gap);

    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${moveX}px)`;
  }, [index]);

  return (
    <section className="w-full bg-[#ECEBE6] py-16 lg:py-0 lg:mb-50 px-6 overflow-hidden">
      {/* Título */}
      <h1 className="text-4xl lg:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] font-bold text-[#002325] text-center mb-12 leading-tight animate-fade-up animate-duration-1000 animate-delay-700 animate-ease-in">
        Real Stories. <br /> Real Results
      </h1>

      {/* Carrossel */}
      <div className="relative flex items-center justify-center">
        {/* Seta esquerda */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 text-[#002325] text-2xl px-2 hover:scale-110 transition"
        >
          ←
        </button>

        {/* Track */}
        <div className="w-full overflow-hidden px-10 lg:mt-15">
          <div ref={trackRef} className="flex gap-8 lg:justify-between lg:px-7">
            {feedbacks.map((item, i) => (
              <div
                key={i}
                className="card min-w-[300px] max-w-[320px] lg:w-full bg-white rounded-xl p-6 flex flex-col gap-4 shadow-sm"
              >
                {/* Avatar + Nome */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#002325] text-sm lg:text-[1.3rem]">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 lg:text-[1rem]">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Texto */}
                <p className="text-sm text-[#002325] lg:text-[1rem]">
                  {item.text}
                </p>

                {/* Estrelas */}
                <div className="flex gap-1 text-yellow-400 text-base">
                  {"★★★★★"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seta direita */}
        <button
          onClick={next}
          className="absolute right-0 z-10 text-[#002325] text-2xl px-2 hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Feedbacks;
