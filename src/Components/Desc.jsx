import React from "react";
import clean from "../assets/clean.jpg";
import clean1 from "../assets/repair.jpg";
import clean2 from "../assets/install.jpg";
import { List } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Desc = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <h1 className="mb-1 text-4xl   text-center capitalize tracking-tight font-extrabold text-gray-900 font-[rubik] dark:text-white">
        Our Company provides AC cleaning services.
      </h1>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src={clean} alt="dashboard image" />
        <div className="mt-4 md:mt-0">
          <h3 className="mb-4 text-2xl font-medium capitalize font-[rubik] ">
            Power jet and foam air conditioning service in Delhi NCR, India
          </h3>
          <p className="mb-6  text-gray-500 md:text-sm dark:text-gray-500 capitalize font-[rubik] font-normal ">
            The performance of your air conditioner is impacted by outside dust
            and debris. By guaranteeing the greatest AC filter cleaning, our
            foam and power jet AC service shields your AC from the clutches of
            filth and grime. Included in this service is:
          </p>
          <List
            ordered
            className="font-[rubik] mx-auto px-2 text-sm list-outside text-gray-500 dark:text-gray-500  space-y-2 font-normal capitalize"
          >
            <List.Item>
              Last inspections: We make sure everything is working properly and
              look for leaks in the drain tray and pipes.
            </List.Item>
            <List.Item>
              Uncluttered experience: With our distinctive AC jacket, spills
              will never happen again, guaranteeing a clean workspace after
              service.
            </List.Item>
            <List.Item>
              2X greater dust removal: We guarantee a complete cleaning, leaving
              no particle behind, thanks to our cutting-edge foam + power jet
              technology.
            </List.Item>
          </List>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row sm:flex-row sm:gap-5 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-6 ">
        <div>
          <h3 className="text-xl uppercase font-bold ">Power jet AC service</h3>
          <p className="mb-6 pt-5 text-gray-500 md:text-sm dark:text-gray-500 capitalize font-[rubik] font-normal ">
            In terms of improving cooling efficiency, our power jet air
            conditioning service is unique in the industry. Say goodbye to
            problems with the cooling of your air conditioner with our power jet
            AC servicing.
          </p>
          <List
            ordered
            className="font-[rubik]    mx-auto px-2 text-sm list-outside text-gray-500 dark:text-gray-500  space-y-3 font-normal capitalize"
          >
            <List.Item>
              Improved cooling performance: As we do power jet AC service, say
              hello to a pleasant breeze.
            </List.Item>
            <List.Item>
              Indoor and basic outdoor cleaning: We make sure to thoroughly
              clean the indoor unit while also giving it a basic cleaning.
            </List.Item>
          </List>
        </div>
        <div>
          <h3 className="text-xl uppercase font-bold ">
            Anti-rust deep clean AC service{" "}
          </h3>
          <p className="mb-6 pt-5  text-gray-500 md:text-sm dark:text-gray-500 capitalize font-[rubik] font-normal ">
            Through the elimination of rust-induced gas leaks, our anti-rust
            deep clean AC service protects the longevity and functionality of
            your air conditioner.
          </p>
          <List
            ordered
            className="font-[rubik]  mx-auto px-2 text-sm list-outside text-gray-500 dark:text-gray-500  space-y-2 font-normal capitalize"
          >
            <List.Item>
              Fits both split and window air conditioners: Our anti-rust
              solution takes care of both split and window air conditioners.
            </List.Item>
            <List.Item>
              Stops gas leaks: Your air conditioner won't leak gas frequently
              thanks to our exclusive anti-rust solution, which guarantees
              long-lasting operation.
            </List.Item>
          </List>
        </div>
      </div>
      <section>
        <h1 className="mb-1 text-4xl   text-center capitalize tracking-tight font-extrabold text-gray-900 font-[rubik] dark:text-white">
          All-inclusive guide for air conditioning repairs in Delhi NCR, India.
        </h1>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-2 md:mt-0">
            <h4 className="mb-4 text-2xl font-medium capitalize font-[rubik] ">
              Find excellent AC repair services in India's Delhi NCR.{" "}
            </h4>
            <p className="pt-3 mb-6 text-gray-500 md:text-md dark:text-gray-500 capitalize font-[rubik] font-normal leading-7 ">
              Put your trust in the best for AC repair. The committed personnel
              at S-A Company have years of experience, are committed to customer
              satisfaction, and are trained to deliver perfection. Your ease is
              our top concern when working with us, and we go above and beyond
              to make sure you have a hassle-free experience. To sum up, AC
              repair doesn't have to be difficult. You may be confident that
              your cooling companion is in good hands with S-A Company's careful
              service.
            </p>
            <h6 className="text-md uppercase font-bold mb-6">
              Top Reasons To Service Your Air Conditioner Regularly
            </h6>{" "}
            <List
              ordered
              className="font-[rubik] mx-auto px-2 text-sm list-outside text-gray-500 dark:text-gray-500  space-y-2 font-normal capitalize grid grid-cols-2   sm:grid-cols-1 gap-2"
            >
              <List.Item>
                clean air <i className="ri-windy-line underline"></i>
              </List.Item>
              <List.Item>
                expanded life of the air conditioner{" "}
                <i className="ri-vip-crown-line underline"></i>
              </List.Item>
              <List.Item>
                saves environment <i className="ri-earth-line underline"></i>
              </List.Item>
              <List.Item>
                prevents high cost{" "}
                <i className="ri-wallet-3-line underline"></i>
              </List.Item>
            </List>
          </div>
          <img
            className="w-full dark:hidden"
            src={clean1}
            alt="dashboard image"
          />
        </div>
      </section>
      <section>
        <div className="flex w-full  justify-center items-center ">
          <img
            src={clean2}
            alt="install"
            className="w-[500px] h-[500px] rounded-full  "
          />
        </div>
        <div className="text-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16   sm:py-16 lg:px-6">
          <h1 className="capitalize font-[rubik] text-3xl font-semibold pb-5">
            Easy installation and removal of air conditioners
          </h1>
          <p className=" text-gray-500 md:text-md  mb-6 dark:text-gray-500 capitalize font-[rubik] font-normal leading-7 ">
            When it comes to AC installation and removal, we are the business to
            call! We can help you avoid the heat by installing a brand-new air
            conditioner or by seamlessly removing your old unit with our
            uninstallation service. Let's go into the specifics of how our local
            ac installation and removal services can improve your quality of
            life.
          </p>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1   pt-7 capitalize">
            <div className="pt-5">
              <h1 className=" text-3xl font-[rubik] font-bold ">
                AC installation{" "}
              </h1>

              <p className=" text-gray-500 md:text-md dark:text-gray-500 mb-6 capitalize font-[rubik] font-normal leading-7 ">
                With S-A Company on your side, installing a new air conditioner
                doesn't have to be a difficult undertaking. With a flawless
                installation process handled by our skilled specialists, you'll
                have an AC that works flawlessly and is ready to keep you cool.
                The following is what our AC installation service will entail:
              </p>
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title className="capitalize">
                    complete installation?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Our technicians may install split air conditioning systems
                      or windows; we take care of all installation-related
                      tasks, including drilling, wiring connections, and setting
                      up the indoor and outdoor units.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="capitalize">
                    Uniform Equipment?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      For every installation, we use top-notch materials and
                      cutting-edge equipment to ensure effective outcomes and
                      long-lasting performance.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="capitalize">
                    professional guidance ?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Do you need recommendations, have inquiries regarding your
                      new air conditioner, or know how to schedule air
                      conditioning service online? Our experts are available to
                      assist. Please don't hesitate to seek professional
                      guidance on upkeep, usage, and other topics.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="capitalize">
                    Check for free gas?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Concerned about gas spills? Avoid becoming. As part of our
                      installation service, we perform a comprehensive gas check
                      to make sure your air conditioner is leak-free and
                      operating at peak efficiency.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
            <div className="pt-5">
              <h1 className=" text-3xl font-[rubik] font-bold ">
                AC uninstallation{" "}
              </h1>
              <p className=" text-gray-500 md:text-md mb-6 dark:text-gray-500 capitalize font-[rubik] font-normal leading-7 ">
                Getting rid of your old air conditioner? Give the uninstalling
                process to us to manage. Our skilled experts will make sure
                everything goes smoothly and that your area is tidy and prepared
                for your new air conditioner. Our AC uninstallation service
                consists of the following:
              </p>
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title className="capitalize">
                    safe extration?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Our professionals will gently remove the indoor and
                      outdoor units, taking care to protect your belongings in
                      the process.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="capitalize">
                    pipe repairs ?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Concerned about pipes that are left over? We have
                      everything covered. Our crew will take care of any pipe
                      repairs that are required, leaving your area clutter-free
                      and neat.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="capitalize">
                    fully cleanup ?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      We'll tidy up the service area after the uninstallation is
                      finished, making it pristine and prepared for the
                      following stages.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Desc;
