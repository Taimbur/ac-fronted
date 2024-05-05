import React from "react";
import { Carousel } from "flowbite-react";

const Feedback = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 py-8 px-4 mx-auto max-w-screen-xl text-center sm:p-16 lg:p-6">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div className="flex h-full items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 dark:bg-gray-700 dark:text-white">
            <div className="  ">
              <p className="capitalize tracking-tight lg:text-2xl sm:text-sm leading-7 font-[rubik] mb-4">
                I couldn't be happier with the air conditioning unit I purchased
                from this website. It cools my entire house efficiently and
                quietly. 5 stars!
              </p>
              <figcaption className="flex items-center justify-center">
                <img
                  className="w-6 h-6 rounded-full  "
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <h6 className=" capitalize lg:text-xl sm:text-sm"> | jhon</h6>
              </figcaption>
            </div>
          </div>
          <div className="flex h-full items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gray-700 dark:text-white">
            <div className="">
              <p className="capitalize tracking-tight lg:text-2xl sm:text-sm leading-7 font-[rubik] mb-4">
                Fast response time, fixed the issue quickly.
              </p>
              <figcaption className="flex items-center justify-center">
                <img
                  className="w-6 h-6 rounded-full  "
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                />
                <h6 className=" capitalize lg:text-xl sm:text-sm"> | ahamd</h6>
              </figcaption>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gradient-to-r from-orange-400 to-pink-500 dark:bg-gray-700 dark:text-white">
            <div className=" ">
              <p className="capitalize tracking-tight lg:text-2xl sm:text-sm leading-7 font-[rubik] mb-4">
                I'm amazed by the fast shipping! Ordered my AC unit and it
                arrived the next day. Installation was a breeze, and now I'm
                enjoying cool air in my home. Thank you.
              </p>
              <figcaption className="flex items-center justify-center">
                <img
                  className="w-6 h-6 rounded-full  "
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Avatar"
                />
                <h6 className=" capitalize lg:text-xl sm:text-sm"> | alina</h6>
              </figcaption>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Feedback;
