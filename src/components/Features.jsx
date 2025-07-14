import React, { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState();
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    setTransformStyle({
      transform: `perspective(1000px) rotateX(${
        (e.clientY -
          itemRef.current.getBoundingClientRect().top -
          itemRef.current.clientHeight / 2) /
        20
      }deg) rotateY(${
        (e.clientX -
          itemRef.current.getBoundingClientRect().left -
          itemRef.current.clientWidth / 2) /
        20
      }deg)`,
      transition: "transform 0.1s ease-out",
    });
  };
  const handleMouseLeave = () => {
    setTransformStyle(undefined);
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
    >
      <div className="absolute inset-0 transform transition-transform duration-500 hover:scale  105">
        {children}
      </div>
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-2 max-w-64 text-xs md:text-base opacity-80">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in the metagame layer, where the real strategy
            unfolds. This is where players analyze, adapt, and outsmart their
            opponents. The metagame is not just about the cards you play, but
            how you play them in the context of the current game environment.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="The metagame layer is where the real strategy unfolds."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="Explore the vast universe of Bento, where every card has a story."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>us
                </>
              }
              description="Immerse yourself in the metagame layer, where the real strategy unfolds."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  b<b>e</b>nto
                </>
              }
              description="The metagame layer is where the real strategy unfolds."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re c<b>o</b>ming s<b>o</b>on
              </h1>
              <TiLocationArrow className="m-2 scale=[5] self-end text-black " />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            ></video>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
