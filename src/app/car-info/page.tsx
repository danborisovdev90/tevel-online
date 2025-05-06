"use client";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useEffect, useState } from "react";
import { FormSlider } from "../components/forms/form-slider";
import { CarInfoComponent } from "../components/car-info-component/car-info-component";
import { useContext } from "react";
import { PaymentsContext } from "../providers";
import { useRouter } from "next/navigation";
import Link from "next/link";

const installments = [24, 36, 48, 60, 72, 84, 99];

export default function CarInfoPage() {
  const { paymentData, setPaymentData, carData } = useContext(PaymentsContext);
  const router = useRouter();
  const calculateMonthlyPayment = () => {
    const monthlyPayment = (
      (paymentData.startPayment - paymentData.finalPayment) /
      paymentData.selectedInstallment
    ).toFixed(0);
    setPaymentData({ ...paymentData, monthlyPayment: +monthlyPayment });
  };

  useEffect(() => {
    calculateMonthlyPayment();
  }, [
    paymentData.finalPayment,
    paymentData.selectedInstallment,
    paymentData.startPayment,
  ]);

  return (
    <section className="flex flex-1 bg-gray-100 relative z-10">
      <div className="container -mb-20 lg:mb-10">
        <div className="bg-white pb-10 rounded-[20px]">
          <div className="flex flex-col justify-end lg:justify-start lg:flex-row-reverse gap-4 bg-white h-full lg:h-fit pt-10  mt-10 lg:py-10 lg:px-10">
            <form className="lg:w-1/2 lg:max-w-[590px] bg-white rounded-lg p-4 lg:border lg:border-gray-500 px-5 py-4">
              <FormSlider
                value={paymentData.startPayment}
                setValue={(value) =>
                  setPaymentData({ ...paymentData, startPayment: value })
                }
                min={20000}
                max={carData.price}
                label="מקדמה"
              />
              <div className="border-t border-b border-b-gray-200 border-t-gray-200 py-4 my-4">
                <h3 className="text-right font-hebrew font-bold text-xl mb-4">
                  פריסת ההחזרים
                </h3>
                <div className="flex flex-wrap flex-row-reverse gap-4 justify-center mb-6 lg:flex-nowrap ">
                  {installments.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`w-[68px] h-[31px] rounded-lg border-2 font-rubik text-base font-bold transition-colors duration-150 hover:cursor-pointer
                      ${
                        paymentData.selectedInstallment === item
                          ? "bg-gradient-to-r from-[#FF3434] to-[#B62B2B] text-white border-[#FF3434]"
                          : "bg-white text-[#232B36] border-[#FF3434]"
                      }
                    `}
                      onClick={() =>
                        setPaymentData({
                          ...paymentData,
                          selectedInstallment: item,
                        })
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <FormSlider
                value={paymentData.finalPayment}
                setValue={(value) =>
                  setPaymentData({ ...paymentData, finalPayment: value })
                }
                min={0}
                max={30000}
                label="פריסת ההחזרים"
              />
              <div className="mt-5 flex gap-2 lg:gap-4 mb-6 bg-pink-100 rounded-[3px] px-4 lg:px-8 py-5 justify-between">
                <CalendarTodayOutlinedIcon className="text-red" />
                <span className="font-rubik text-red text-xl lg:text-2xl mr-auto">
                  החזר חודשי:
                </span>
                <strong className="text-red font-bold font-rubik text-xl lg:text-2xl w-[100px] text-left">
                  {paymentData.monthlyPayment.toLocaleString("en-US")} ₪
                </strong>
              </div>
            </form>
            <CarInfoComponent
              car={{ ...carData, ...paymentData }}
              pageType="car-info"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center px-4 gap-4 lg:px-10 items-center">
            <div className="flex flex-col gap-4 lg:w-3/4">
              <p className="text-[10px]">
                המחשבון מהווה כלי עזר בלבד למתן אנדיקציה
              </p>
              <p className="text-[10px]">
                מחשבון ההלוואה מהווה כלי עזר לצורך מתן אינדיקציה כללית אודות
                תנאי הלוואה כלשהי והם לצורך הדגמה בלבד. תנאי ההלוואה הספציפיים
                והמחייבים יקבעו על ידי הגוף המלווה, בהתאם לשיקול דעתו הבלעדי,
                מדיניותו ונהליו. נתונים אלו משקפים את ההחזרים נכון למועד זה,
                במידה ויחולו שינויים במדד המחירים לצרכן ו/ או בריבית הפריים
                ייתכנו שינויים בהחזר החודשי וזאת בהתאם להוראות הסכם ההלוואה.
              </p>
            </div>
            <Link
              href="/documents"
              className="bg-gradient-to-r from-[#FF3434] to-[#B62B2B] px-14 py-2 flex items-center gap-2 font-bold rounded-[9px] lg:w-auto lg:mr-auto text-white"
            >
              <span>המשך</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
