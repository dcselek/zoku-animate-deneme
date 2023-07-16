"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    // Scrolling two pages in one page
    <main className="">
      <section className="w-full z-0">
        <div className="flex flex-col items-center justify-center bg-[url('/background.jpg')] min-h-screen">
          <h1 className="text-6xl font-bold text-white">Hello World</h1>
          <p className="text-2xl font-bold text-white">Welcome to my website</p>
          <div
            className={`pt-24 flex justify-center items-center gap-3 flex-col transform`}
            style={{
              transform: `translateY(${
                scroll / 4 === 270 ? 270 : scroll / 4
              }px)`,
            }}
          >
            <span className="text-2xl font-bold text-white">Scroll down</span>
            <div className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-1 1v7.586L5.707 9.293a1 1 0 00-1.414 1.414l4.586 4.586a1 1 0 001.414 0l4.586-4.586a1 1 0 10-1.414-1.414L11 11.586V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="z-[1] pt-[120%]">
              <Image src="/zoku.webp" width={600} height={600} alt="zoku" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full z-10 relative">
        <div className="flex flex-col items-center justify-center bg-[url('/background2.jpg')] min-h-screen z-10">
          <h1 className="text-6xl font-bold text-yellow-300">Hello World</h1>
          <p className="text-2xl font-bold text-yellow-400">Welcome to my website</p>
          <div className="pt-24 flex justify-center items-center flex-col gap-3 transform
          " style={{ transform: `translateY(-${scroll / 4}px)` }}>
            <span className="text-2xl font-bold text-yellow-500">Scroll Up</span>
            <div className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 fill-yellow-500 rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-1 1v7.586L5.707 9.293a1 1 0 00-1.414 1.414l4.586 4.586a1 1 0 001.414 0l4.586-4.586a1 1 0 10-1.414-1.414L11 11.586V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
