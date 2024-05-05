import React from "react";
import last from "../assets/l.jpg";
import Service from "./Service";
import Desc from "./Desc";
import Why from "./Why";
import Feedback from "./Feedback";
const Carosol = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            AC REPAIR EXPERTS
          </h1>
          <p className="max-w-2xl mb-6 capitalize font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            For all of your AC repair needs, s-a is the most reputable and
            trustworthy business. We are present in several Indian places,
            including New Delhi, & &nbsp;{" "}
            <span className=" line-through">Noida</span>.
          </p>
          <a
            href="tel:8860524349"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg   focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 font-[rubik]  hover:scale-110  duration-300 hover:bg-[#2e82f0] "
          >
            <i className="ri-phone-line text-2xl"></i> &nbsp;Call Now
          </a>
          &nbsp; &nbsp;
          <a
            href="https://wa.me/8860524349"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg   focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 font-[rubik] hover: hover:scale-110  duration-300 hover:bg-[#25D366] "
          >
            <i className="ri-whatsapp-line  text-2xl"></i>&nbsp; WhatsApp
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={last} alt="mockup" />
        </div>
      </div>
      <Service />
      <Desc />
      <Why />
      <Feedback />
    </section>
  );
};

export default Carosol;
