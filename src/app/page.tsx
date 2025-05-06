"use client";

import { useState } from "react";
import { HomepageForm } from "./components/forms/homepage-form";
import { RightPart } from "./components/layout/right-part/right-part";
import { SmsForm } from "./components/forms/sms-form";

export default function Home() {
  const [step, setStep] = useState<number>(0);
  return (
    <section className="flex flex-col lg:flex-row flex-1 relative bg-gray-100 lg:bg-white">
      <div className="p-8 hidden justify-center items-center lg:flex lg:w-1/2 bg-gray-100 xl:w-2/5">
        <RightPart />
      </div>
      {step === 0 && (
        <div className="w-full lg:w-1/2 lg:pb-30 xl:w-3/5 lg:flex lg:flex-col lg:justify-center lg:pt-40">
          <div className="container ">
            <div className="lg:border-b lg:border-red max-w-[716px] mx-auto">
              <h1 className="text-center text-4xl font-bold text-red lg:font-[rubik] lg:text-3xl">
                מימון לרכב בקליק
              </h1>
              <h2 className="text-center text-4xl lg:font-[rubik] lg:text-2xl lg:text-red">
                הלוואה לרכישת רכב יד שנייה בין אנשים פרטיים
              </h2>
            </div>
          </div>
          <div className="bg-[url('/images/mobile-home-bg.png')] bg-cover bg-center pt-4 pb-9 relative z-10 rounded-b-2xl lg:bg-gradient-to-r from-[#e10514] to-[#bc3535] lg:py-6 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:rounded-none ">
            <div className="container">
              <img
                className="mx-auto mb-8 w-[210px] lg:hidden"
                src="/images/logo-white.svg"
                alt=""
              />
              <ul className="flex flex-col gap-3 items-center lg:flex-row lg:justify-center lg:items-center">
                <li className="flex gap-5 items-center text-lg text-white font-bold">
                  <img src="/images/icons/check.svg" />
                  מימון לרכב בתנאים המשתלמים ביותר
                </li>
                <li className="flex gap-5 items-center text-lg text-white font-bold">
                  <img src="/images/icons/check.svg" />
                  תהליך מאובטח וזריז
                </li>
                <li className="flex gap-5 items-baseline text-lg text-white font-bold">
                  <img src="/images/icons/check.svg" />
                  מימון לרכבים יד 2 בין אדם פרטי לאדם פרטי
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-pink -mt-4 pt-9 pb-5 relative z-0 lg:hidden">
            <div className="container">
              <h3 className="text-center text-2xl font-bold text-red">
                תן לנו לאתר עבורך את המימון המשתלם ביותר, מבלי לצאת מהבית
              </h3>
            </div>
          </div>
          <HomepageForm />
        </div>
      )}
      {step === 1 && (
        <div className="w-full lg:w-1/2 lg:pt-20 lg:pb-30 xl:w-3/5 lg:flex lg:flex-col lg:justify-center">
          <div className="container ">
            <div className="lg:border-b lg:border-red max-w-[716px] mx-auto lg:hidden">
              <h2 className="text-center text-4xl font-bold text-red lg:font-[rubik] lg:text-3xl">
                מימון לרכב בקליק
              </h2>
              <h3 className="text-center text-4xl lg:font-[rubik] lg:text-2xl lg:text-red">
                הלוואה לרכישת רכב יד שנייה בין אנשים פרטיים
              </h3>
            </div>
          </div>
          <SmsForm />
        </div>
      )}
    </section>
  );
}
